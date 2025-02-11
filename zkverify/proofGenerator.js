// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IZkVerify {
    function verifyProof(bytes calldata proof, bytes32 root, bytes32 leaf) external view returns (bool);
}

contract zkScholarNFT_Arbitrum is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    address public zkVerifyContract;
    mapping(uint256 => bool) public verifiedCertificates;
    
    event CredentialMinted(uint256 indexed tokenId, address recipient);
    event ProofValidated(uint256 indexed tokenId, bool valid);
    
    constructor(address _zkVerifyContract) ERC721("zkScholar Credential Arbitrum", "ZKSC-ARB") {
        zkVerifyContract = _zkVerifyContract;
    }

    function mintCredential(address recipient, string memory tokenURI) external onlyOwner returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        emit CredentialMinted(newTokenId, recipient);
        return newTokenId;
    }

    function verifyCredential(uint256 tokenId, bytes calldata proof, bytes32 root, bytes32 leaf) external {
        require(ownerOf(tokenId) != address(0), "Invalid credential");
        IZkVerify zkVerifier = IZkVerify(zkVerifyContract);
        bool isValid = zkVerifier.verifyProof(proof, root, leaf);
        verifiedCertificates[tokenId] = isValid;
        emit ProofValidated(tokenId, isValid);
    }
}

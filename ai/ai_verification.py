import cv2
import pytesseract
import hashlib
import json

def extract_text_from_image(image_path):
    """Extract text from an image using OCR."""
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray)
    return text.strip()

def generate_proof(text):
    """Generate a hash proof from extracted text."""
    text_hash = hashlib.sha256(text.encode()).hexdigest()
    return text_hash

def verify_proof(text, proof):
    """Verify if the proof matches the text."""
    return generate_proof(text) == proof

if __name__ == "__main__":
    image_path = "certificate.jpg"  # Replace with actual image path
    extracted_text = extract_text_from_image(image_path)
    proof = generate_proof(extracted_text)
    
    print("Extracted Text:", extracted_text)
    print("Generated Proof:", proof)
    
    verification = verify_proof(extracted_text, proof)
    print("Verification Status:", "Valid" if verification else "Invalid")

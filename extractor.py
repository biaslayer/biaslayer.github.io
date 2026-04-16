import argparse
import fitz # PyMuPDF
import io
from PIL import Image

parser = argparse.ArgumentParser(description="Extract images from a PDF file")
parser.add_argument("filename", help="The PDF file to extract images from")
args = parser.parse_args()

pdf_file = fitz.open(args.filename)

for page_index in range(len(pdf_file)):
    page = pdf_file[page_index]
    image_list = page.get_images(full=True)

    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = pdf_file.extract_image(xref)
        image_bytes = base_image["image"]
        
        # Save the image
        with open(f"image_p{page_index}_{img_index}.png", "wb") as f:
            f.write(image_bytes)
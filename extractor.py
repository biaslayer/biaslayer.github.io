import fitz # PyMuPDF
import io
from PIL import Image

pdf_file = fitz.open("META_AGENTS_GSOC_PROPOSAL.pdf")

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
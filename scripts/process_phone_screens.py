#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont

SRC_DIR = "public/software"
OUT_DIR = "public/software"

font_bold = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 26)
font_bold_title = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 28)
font_reg = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf", 23)
font_sm = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf", 19)

# 1. Panel de Control
im_panel = Image.open(f"{SRC_DIR}/panelphone.jpeg")
crop_panel = im_panel.crop((0, 105, 739, 1520))
crop_panel.save(f"{OUT_DIR}/phone-panel.png", "PNG", optimize=True)
print("phone-panel.png OK")

# 2. Agenda
im_agenda = Image.open(f"{SRC_DIR}/agendaphone.jpeg")
crop_agenda = im_agenda.crop((0, 105, 739, 1520))
crop_agenda.save(f"{OUT_DIR}/phone-agenda.png", "PNG", optimize=True)
print("phone-agenda.png OK")

# 3. Estadísticas
im_stats = Image.open(f"{SRC_DIR}/estadisticasphone.jpeg")
crop_stats = im_stats.crop((0, 105, 739, 1520))
crop_stats.save(f"{OUT_DIR}/phone-estadisticas.png", "PNG", optimize=True)
print("phone-estadisticas.png OK")

# 4. Anamnesis / Evaluación Inicial
im_anam = Image.open(f"{SRC_DIR}/anamnesisphone.jpeg")
crop_anam = im_anam.crop((0, 105, 739, 1520))
draw_anam = ImageDraw.Draw(crop_anam)

# Input 'Motivo de consulta': x: 148..650, y in crop: 315..390
draw_anam.rectangle([150, 316, 646, 388], fill="#ffffff")
draw_anam.text((168, 338), "Dolor en hombro derecho (EVA 7)", fill="#1e293b", font=font_reg)

# Input 'Causa de la lesión': x: 148..650, y in crop: 408..480
draw_anam.rectangle([150, 410, 646, 478], fill="#ffffff")
draw_anam.text((168, 432), "Traumatismo indirecto deportivo", fill="#1e293b", font=font_reg)

crop_anam.save(f"{OUT_DIR}/phone-anamnesis.png", "PNG", optimize=True)
print("phone-anamnesis.png OK")

# 5. Historial Clínico
im_hist = Image.open(f"{SRC_DIR}/historialphone.jpeg")
crop_hist = im_hist.crop((0, 105, 739, 1520))

# Clean header
header_slice = crop_panel.crop((0, 0, 739, 120))
crop_hist.paste(header_slice, (0, 0))
draw_hist = ImageDraw.Draw(crop_hist)
draw_hist.rectangle([95, 10, 480, 75], fill="#ffffff")
draw_hist.text((95, 12), "Historial Clínico", fill="#0f172a", font=font_bold_title)
draw_hist.text((95, 46), "Atención y seguimiento kinésico", fill="#64748b", font=font_sm)

# Patient card:
# Avatar (x: 62..138, y in crop: 212..290)
draw_hist.rounded_rectangle([62, 212, 138, 290], radius=18, fill="#0284c7")
draw_hist.text((80, 238), "CM", fill="#ffffff", font=font_bold)

# Name 'Plip Plop' (x: 160..280, y in crop: 180..220)
draw_hist.rectangle([160, 180, 280, 222], fill="#ffffff")
draw_hist.text((162, 185), "Carlos Mendoza S.", fill="#0f172a", font=font_bold)

# RUT row (x: 160..620, y in crop: 226..255)
draw_hist.rectangle([160, 226, 620, 255], fill="#ffffff")
draw_hist.text((162, 230), "RUT: 16.842.319-K  ·  38 años  ·  Masculino", fill="#64748b", font=font_sm)

# Phone row (x: 210..500, y in crop: 263..295)
draw_hist.rectangle([210, 263, 500, 295], fill="#ffffff")
draw_hist.text((215, 268), "+56 9 8412 5590", fill="#64748b", font=font_sm)

crop_hist.save(f"{OUT_DIR}/phone-historial.png", "PNG", optimize=True)
print("phone-historial.png OK")

# 6. Sesión / Escalas Clínicas
im_ses = Image.open(f"{SRC_DIR}/sesionphone.jpeg")
crop_ses = im_ses.crop((0, 105, 739, 1520))

# Clean header
crop_ses.paste(header_slice.crop((0, 0, 739, 115)), (0, 0))
draw_ses = ImageDraw.Draw(crop_ses)
draw_ses.rectangle([95, 10, 480, 75], fill="#ffffff")
draw_ses.text((95, 12), "Escalas Clínicas", fill="#0f172a", font=font_bold_title)
draw_ses.text((95, 46), "Evaluación funcional & seguimiento", fill="#64748b", font=font_sm)

crop_ses.save(f"{OUT_DIR}/phone-sesion.png", "PNG", optimize=True)
print("phone-sesion.png OK")

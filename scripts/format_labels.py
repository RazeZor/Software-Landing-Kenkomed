import re

with open('components/pricing.tsx', 'r') as f:
    content = f.read()

# Replace <Label> classes
content = re.sub(
    r'<Label htmlFor="([^"]+)" className="[^"]+">',
    r'<Label htmlFor="\1" className="text-sm font-medium text-foreground">',
    content
)

# Remove the icons inside labels (e.g. <User size={13} className="text-brand" />)
content = re.sub(
    r'<[A-Za-z0-9]+ size=\{13\} className="text-brand" />\n\s*',
    r'',
    content
)

# Some select tags are inside <label> without htmlFor, let's fix the class of those as well if any
content = re.sub(
    r'<label className="text-xs font-semibold text-foreground block">',
    r'<Label className="text-sm font-medium text-foreground block">',
    content
)

# Replace "Nombre Completo" with "Nombre completo"
content = content.replace("Nombre Completo", "Nombre completo")
content = content.replace("Número de Teléfono", "Número de teléfono")
content = content.replace("Teléfono Directo", "Número de teléfono")

with open('components/pricing.tsx', 'w') as f:
    f.write(content)

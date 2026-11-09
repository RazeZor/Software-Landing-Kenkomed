import os
import re

dir_path = "/home/nacho-dev/Escritorio/nachodevsc/Software-Landing-Kenkomed/components"

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(".tsx"):
            file_path = os.path.join(root, file)
            with open(file_path, "r") as f:
                content = f.read()
            
            new_content = re.sub(r'margin:\s*[\'"]-\d+(px|%)[\'"]', 'margin: "200px"', content)
            
            if new_content != content:
                with open(file_path, "w") as f:
                    f.write(new_content)
                print(f"Updated {file_path}")

hook_path = "/home/nacho-dev/Escritorio/nachodevsc/Software-Landing-Kenkomed/hooks/use-scroll-animation.ts"
if os.path.exists(hook_path):
    with open(hook_path, "r") as f:
        content = f.read()
    content = content.replace("threshold = 0.15", "threshold = 0")
    content = content.replace("rootMargin = '0px'", "rootMargin = '200px'")
    with open(hook_path, "w") as f:
        f.write(content)
    print("Updated use-scroll-animation.ts")

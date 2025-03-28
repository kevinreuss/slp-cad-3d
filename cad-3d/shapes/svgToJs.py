import os
import json

def convert_svg_to_js(svg_dir="svg-templates"):
    # Durch alle Unterordner im svg-templates Verzeichnis iterieren
    for subdir in os.listdir(svg_dir):
        subdir_path = os.path.join(svg_dir, subdir)
        
        # Prüfen ob es sich um einen Ordner handelt
        if not os.path.isdir(subdir_path):
            continue
            
        # Dictionary für die SVGs des aktuellen Unterordners
        svg_dict = {}
        
        # Durch alle SVG-Dateien im Unterordner iterieren
        for file in os.listdir(subdir_path):
            if file.endswith('.svg'):
                # Dateiname ohne .svg als Key verwenden
                key = file[:-4]
                
                # SVG-Datei einlesen
                with open(os.path.join(subdir_path, file), 'r', encoding='utf-8') as f:
                    svg_content = f.read()
                    
                # SVG-Content als Value speichern
                svg_dict[key] = svg_content
        
        # JavaScript-Datei erstellen
        js_content = f"""const {subdir}Shapes = {json.dumps(svg_dict, indent=2)};

// Exportieren der Shapes
window.shapeLibrary = window.shapeLibrary || {{}};
window.shapeLibrary.{subdir} = {subdir}Shapes;
"""
        
        # JavaScript-Datei speichern
        with open(f"{subdir}.js", 'w', encoding='utf-8') as f:
            f.write(js_content)

if __name__ == "__main__":
    convert_svg_to_js()
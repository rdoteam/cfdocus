import os

def remove_en_prefix_from_files(directory):
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith("-en.md"):
                old_path = os.path.join(root, filename)
                new_filename = filename.replace("-en.md", ".md")
                new_path = os.path.join(root, new_filename)
                
                os.rename(old_path, new_path)
                print(f"Renamed: {old_path} -> {new_path}")

if __name__ == "__main__":
    directory_to_scan = "./i18n"  # Altere para o diretório que deseja varrer
    remove_en_prefix_from_files(directory_to_scan)
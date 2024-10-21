import os
import re
from bs4 import BeautifulSoup, Comment

# Caminho base para a pasta dos arquivos HTML e Markdown
BASE_DOCS_PATH = os.path.join("docs")

# Função para converter HTML para Markdown e adicionar H1
def convert_html_to_markdown(base_docs_path):
    for root, _, files in os.walk(base_docs_path):
        for file in files:
            if file.endswith(".html"):
                html_file_path = os.path.join(root, file)
                md_file_path = os.path.join(root, os.path.splitext(file)[0] + ".md")
                
                with open(html_file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remover metadata e extrair título
                metadata_pattern = r"<!-- ## Metadata_Start.*?## Metadata_End -->"  # Captura o bloco de metadata
                title_pattern = r"## title: (.*?)\n"  # Captura o título
                
                title_match = re.search(title_pattern, content)
                if title_match:
                    title = title_match.group(1)
                    h1_title = f"# {title}\n\n"
                else:
                    h1_title = ""
                
                # Remover metadata do conteúdo
                content = re.sub(metadata_pattern, "", content, flags=re.DOTALL)
                
                # Converter HTML para Markdown usando BeautifulSoup
                soup = BeautifulSoup(content, 'html.parser')
                
                # Remover scripts, styles e comentários desnecessários
                for script in soup(['script', 'style']):
                    script.decompose()
                for comment in soup.findAll(string=lambda text: isinstance(text, Comment)):
                    comment.extract()
                
                markdown_content = soup.get_text(separator="\n")
                
                # Sanitizar caracteres e expressões problemáticas
                markdown_content = re.sub(r"[{<].*?[}>]", "", markdown_content)  # Remove possíveis expressões e tags problemáticas
                markdown_content = re.sub(r"\[.*?\]\(.*?\)", "", markdown_content)  # Remove links malformados
                markdown_content = re.sub(r"`.*?`", "", markdown_content)  # Remove expressões em inline code que possam estar malformadas
                markdown_content = re.sub(r"\*\*.*?\*\*", "", markdown_content)  # Remove negrito problemático
                markdown_content = re.sub(r"__.*?__", "", markdown_content)  # Remove sublinhados que possam estar malformados
                
                # Adicionar H1 no início do conteúdo
                markdown_content = h1_title + markdown_content.strip()
                
                # Escrever o conteúdo em um novo arquivo Markdown
                with open(md_file_path, 'w', encoding='utf-8') as f:
                    f.write(markdown_content)
                
                print(f"Convertido: {html_file_path} -> {md_file_path}")
                
                # Remover o arquivo HTML original
                os.remove(html_file_path)
                print(f"Removido arquivo HTML: {html_file_path}")

# Função para sanitizar arquivos Markdown existentes
def sanitize_markdown_files(base_docs_path):
    for root, _, files in os.walk(base_docs_path):
        for file in files:
            if file.endswith(".md"):
                md_file_path = os.path.join(root, file)
                with open(md_file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remover tags HTML e sanitizar o conteúdo
                soup = BeautifulSoup(content, 'html.parser')
                for script in soup(['script', 'style']):
                    script.decompose()
                for comment in soup.findAll(string=lambda text: isinstance(text, Comment)):
                    comment.extract()
                
                sanitized_content = soup.get_text(separator="\n")
                sanitized_content = re.sub(r"[{<].*?[}>]", "", sanitized_content)  # Remove possíveis expressões e tags problemáticas
                sanitized_content = re.sub(r"\[.*?\]\(.*?\)", "", sanitized_content)  # Remove links malformados
                sanitized_content = re.sub(r"`.*?`", "", sanitized_content)  # Remove expressões em inline code que possam estar malformadas
                sanitized_content = re.sub(r"\*\*.*?\*\*", "", sanitized_content)  # Remove negrito problemático
                sanitized_content = re.sub(r"__.*?__", "", sanitized_content)  # Remove sublinhados que possam estar malformados
                
                # Escrever o conteúdo sanitizado de volta ao arquivo Markdown
                with open(md_file_path, 'w', encoding='utf-8') as f:
                    f.write(sanitized_content)
                
                print(f"Sanitizado: {md_file_path}")

# Função principal para iniciar o processo
def main():
    print("Iniciando a conversão de HTML para Markdown...")
    convert_html_to_markdown(BASE_DOCS_PATH)
    print("Processo de conversão concluído.")
    
    print("Iniciando a sanitização dos arquivos Markdown...")
    sanitize_markdown_files(BASE_DOCS_PATH)
    print("Sanitização dos arquivos Markdown concluída.")

if __name__ == "__main__":
    main()

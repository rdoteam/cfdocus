import os
import re

# Diretório contendo os arquivos de documentação
docs_directory = "C:\\Users\\PauloGuilhermePilott\\Documents\\GitHub\\cfdocus\\versioned_docs\\"

# Expressão regular para identificar links no formato Markdown ([texto](url))
link_pattern = r'\[([^\]]+)\]\([^)]+\)'

# Função para remover links de um conteúdo
def remove_links_from_content(content):
    # Substitui todos os links pelo texto de exibição, removendo a URL
    return re.sub(link_pattern, r'\1', content)

# Função para processar todos os arquivos de documentação
def process_docs(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                
                # Ler o conteúdo do arquivo
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remover links do conteúdo
                updated_content = remove_links_from_content(content)
                
                # Salvar o conteúdo atualizado
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                print(f"Links removidos de: {file_path}")

# Executar a função
process_docs(docs_directory)

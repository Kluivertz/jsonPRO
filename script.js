// Exemplo de um JSON (pode ser substituído por dados reais)
const jsonData = {
    "nome": "Maria",
    "idade": 25,
    "email": "maria@example.com",
    "interesses": ["Arte", "Música"],
    "endereco": {
        "rua": "Avenida Principal",
        "cidade": "Cidade B",
        "pais": "Brasil"
    }
};

// Mostrar o JSON dinâmico no elemento HTML
document.getElementById('jsonDisplay').innerText = JSON.stringify(jsonData, null, 2);

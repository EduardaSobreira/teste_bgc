Scraper de Bestsellers da Amazon

Este é um scraper desenvolvido em Node.js utilizando Puppeteer e Chrome AWS Lambda para extrair informações dos bestsellers da Amazon Brasil.

- Funcionamento

1.Inicialização do Navegador: O scraper utiliza o pacote chrome-aws-lambda para obter o caminho do executável do Chrome adequado para o ambiente AWS Lambda e inicia uma instância do navegador Puppeteer com essas configurações.

2.Scraping dos Bestsellers: Uma nova página é aberta e navegamos até a URL dos bestsellers da Amazon Brasil. Em seguida, usamos o método page.evaluate() para executar código JavaScript no contexto da página e extrair os dados dos produtos, incluindo título, preço, avaliação e URL.

3.Retorno dos Dados: Os dados extraídos são retornados como uma resposta HTTP com status 200 em formato JSON.

4.Tratamento de Erros: Em caso de erro durante o scraping, uma resposta HTTP com status 500 e uma mensagem de erro são retornadas.

- Limitações e Considerações

Este scraper foi desenvolvido para a Amazon Brasil e pode não funcionar corretamente em outras regiões da Amazon.

O scraping de sites pode violar os Termos de Serviço do site-alvo. Use este código com responsabilidade e ética, e verifique os Termos de Serviço antes de usar em produção.

- Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

- Licença
Este projeto está licenciado sob a Licença MIT.
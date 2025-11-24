# React Native:
## Um framework utilizado para desenvolver aplicações para mobile (Android and iOS), diferente de React, onde React é utilizado para desenvolver aplicações Web ("Pc/Plataforma").O Native ele faz a "tradução" dos códigos para as plataformas Android e iOS para o funcionamento.

## Expo:
### Plataforma que amarzena o aplicativo criado.

## Components:
### Existem vários tipos de components, como "Text", ou "View", utilizados para criar linha de texto e uma div.Tem outros padrões conhecidos, mas descritos no ReactNative de forma diferente, pois são "funções" para facilitar o desenvolvimento, onde elas traduzem a encrita do código para a leitura no dispositivo, como outros frameworks, mas no "geral" os components do React amarzenam e leem códigos/escritas de HTML.
#### Obs: o React só lê objetos no código.

### Styles: é parecido com CSS, mas o ReactNative não lê arquivos CSS, por isso é necessário utilizar StyleSheet para as estilizações.Tem como implementá-las direto na linha de códigos ou utilizá-las como "variáveis"/objetos, para sua reutilizção e facilidade em manutenção do código.

### Image: é praticamente o padrão do HTML, mas nele ao invés de escrever 'src' para ler a imagem, tem que escrever 'soucer'.
#### Obs: Quando for fazer o TypeScript reconhecer outros tipos como '.png' (exemplo), lembre-se de colocar o arquivo: 'index.d.ts' na pasta 'src' para a leitura do código.

## Hooks:
### Hooks são "ganchos" entre as "dimensões" do react, as interações em si.

### useState: usado para fazer um refluxo de dado/render na página, para caso tenha mudado algo interno ligado a aparência, ele faz esse "reviu" quando utilizado, assim a página executa novamente a parte redefininda onde foi modificado.
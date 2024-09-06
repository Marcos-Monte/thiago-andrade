/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images:{
    unoptimized: true,
  },
  basePath: '', // Deixe vazio se o site estiver na raiz, ou adicione o caminho, por exemplo '/meusite'
  assetPrefix: './', // Isso ajuda com caminhos relativos
  trailingSlash: true,
};

export default nextConfig;

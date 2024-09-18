import type ICategoria from '@/interfaces/ICategoria';
import type IReceitas from '@/interfaces/IReceitas';

async function obterDadosUrl <T>(url:string) {
  const resposta = await fetch(url)

  return resposta.json() as T;
}

export async function obterCategorias(){
  return obterDadosUrl<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json')
}

export async function obterReceitas() {
  return obterDadosUrl<IReceitas[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
}

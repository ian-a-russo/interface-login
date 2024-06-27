const buscarSeletor = <T extends HTMLElement>(seletor: string): T | null => {
    return document.querySelector(seletor) as T
}

const buscarInput= (seletor: string) => {
    return document.querySelector(seletor) as HTMLInputElement
}

const buscarModal = (seletor: string)  => {
    return document.querySelector(seletor) as HTMLDialogElement
}

export { buscarInput, buscarSeletor, buscarModal }
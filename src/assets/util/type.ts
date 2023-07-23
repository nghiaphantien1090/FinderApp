export type Category = {
    type: string,
    url?: string,
    new?:boolean,
    subCat?: Category[],
    avata?:string
}
export type Slide = {
    numTotalCard:number,
    widthTotal: () => number | undefined,
    widthCard: () => number | undefined
    widthShowSlide: number | undefined,
    startCard:number,
    numShowCard:(()=>number),
    xTrans:number
    gap: number,
}
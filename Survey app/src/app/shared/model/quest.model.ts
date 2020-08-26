export interface Quest{
    ref:string;
    desc:string;
    questions:[{question: string,
        options: [
        {0:boolean,qu:string},
        {1:boolean,qu:string},
        {2:boolean,qu:string}
    ],
    textAnswer: string,
    allowTextAnswer: boolean},

    {question: string,
    options: [
    {0:boolean,qu:string},
    {1:boolean,qu:string}
],
textAnswer: string,
allowTextAnswer: boolean},

    {question: string,
    options: [
    {0:boolean,qu:string},
    {1:boolean,qu:string}
],
textAnswer: string,
allowTextAnswer: boolean}];


}
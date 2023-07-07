export interface CallbackArgs {
    arrOfElems: NodeListOf<Element>;
    event?: Event;
}

export interface About {
    title?: string,
    qualities?: string,
    languages?: string,
    personal_details?: PersonalDetails[],
    company?: string | null,
    skils?: Skils[],
    descripion?: string,
    startDate?: string | number,
    finishDate?: string | number,
    sourse?: string | number,
};

export interface Skils {
    lang: string,
    logo: string,
    alt: string,
    rate?: number,
};

export interface Data {
    topic: string,
    done?: string[],
    not?: string[],
    about?: About[],
    stack?: Skils[],
};

// export interface Stack {
//     language: string,
//     builder: string,
//     markup: string,
//     style: string,
// }

export interface PersonalDetails {
    network: string,
    logo: string,
    alt: string,
    text: string,
    selector: string,
}

export interface Links {
    title: string,
    iconClasses: string[],
};


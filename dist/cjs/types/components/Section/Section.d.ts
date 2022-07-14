/// <reference types="react" />
export interface ISection {
    title: string;
    subTitle: string;
    children: any;
    showMore: boolean;
    icon: any;
}
declare const Section: (props: ISection) => JSX.Element;
export default Section;

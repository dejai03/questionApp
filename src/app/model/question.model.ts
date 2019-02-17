export interface Question{
    title: string;
    type: string;
    option: DragElement | string[];
}

export interface DragElement{
    elements: string[];
    buckets: Bucket[];
}
 export interface Bucket{
     bucketName: string;
     bucketElements: string[];
 }
namespace VarsWebApi.Models {
    /**มีหรือไม่ จำนวนเท่าไหร่ */
    export interface HasAndCount {
        /**มีหรือไม่ */
        HasItem: boolean;
        /**จำนวนเท่าไหร่ */
        ItemCount: number;
    }
}
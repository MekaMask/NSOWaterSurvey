namespace VarsWebApi.Models {
    /**ครัวเรือนอยู่อาศัย */
    export interface Residential {
        /**จำนวนสมาชิกในครัวเรือนที่อยู่ประจำติดต่อกันตั้งแต่ 3 เดือนขึ้นไป */
        MemberCount: number;
        /**คนที่อายุ 15-59 ปี */
        WorkingAge: number;
        /**ใช้น้ำเพื่อการอุปโภคบริโภคจากแหล่งใดบ้าง */
        WaterSources: WaterSources;
        /**ใช้น้ำเพื่อรดน้ำต้นไม้ / สวนหย่อม / สวนครัว ในบริเวณที่อยู่อาศัยหรือไม่ */
        GardeningUse: boolean;
    }
}

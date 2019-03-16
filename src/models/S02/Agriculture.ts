namespace VarsWebApi.Models {
    /**2. การทำการเกษตร */
    export interface Agriculture extends ModelBase {
        /**2.1 ข้าว */
        RicePlant: PlantingInfo<RicePlantingField>;

        /**2.2 พืชไร่ */
        AgronomyPlant: PlantingInfo<GrowingFieldWithNames>;

        /**2.3 ยางพารา  */
        RubberTree: PlantingInfo<GrowingField>;

        /**2.4 พืชยืนต้น ไม้ผล สวนป่า  */
        PerennialPlant: PlantingInfo<GrowingFieldWithNames>;

        /**2.5 พืชผัก สมุนไพร */
        HerbsPlant: PlantingInfo<MixablePlantingField>;

        /**2.6 ไม้ดอกไม้ประดับ การเพาะพันธุ์ไม้  */
        FlowerCrop: PlantingInfo<MixablePlantingField>;

        /**2.7 เพาะเชื้อและปลูกเห็ด  */
        MushroomPlant: PlantingInfo<MushroomField>;

        /**2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร  */
        AnimalFarm: Farming;

        /**2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด  */
        AquaticAnimals: AquaticAnimals;
    }
}
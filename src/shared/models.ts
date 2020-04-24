export interface Characteristics {
  popularity: number;
  training: number;
  size: number;
  brain: number;
  security: number;
  childFriendly: number;
  agility: number;
  problematic: number;
}

export interface Observations {
  country: string;
  lifetime: string;
  height: string;
  weight: string;
  price: string;
  carePrice: string;
  careTime: number;
  careComplications: string;
  walkNumber: number;
  mealNumber: number;
  mealWeight: number;
  medCheckUp: number
}

export interface OwnerInfo {
  easyTrain: boolean,  
  familyFit: boolean,
  apartmentFit: boolean,
  hypoallergenicity: boolean
}

export interface AdditionalInfo {
  about: string;
  specialties: string[];
  issues: string[];
}

export interface PetProfile {
  _id: string;
  breed: string;
  imgUrl: string[];
  characteristics: Characteristics;
  observations: Observations;
  additionalInfo: AdditionalInfo;
  ownerInfo: OwnerInfo;
  __v: number
}

// const res:PetProfile = {
//   "characteristics":
//     {
//     "popularity":2,
//     "training":4,
//     "size":2,
//     "brain":4,
//     "security":3,
//     "childFriendly":5,
//     "agility":4,
//     "problematic":3
//   },
//   "observations":{
//     "country":"Японія",
//     "lifetime":"12-15 років",
//     "height":"34-37 см",
//     "weight":"6-7 кг",
//     "price":"600 - 1000 $",
//     "carePrice":'720',"careTime":2,
//     "careComplications":"average",
//     "walkNumber":2,
//     "mealNumber":2,
//     "mealWeight":180,
//     "medCheckUp":2},
//   "ownerInfo":{"easyTrain":true,
//   "familyFit":true,
//   "apartmentFit":true,
//   "hypoallergenicity":false},
//   "additionalInfo":{
//     "specialties":["Японський шпіц потребує вичісування шерсті один-два рази на тиждень, купати його потрібно приблизно з такою ж періодичністю. Якщо ваш вихованець любить спати з вами в ліжку, краще його купати кожен день.Очищайте очі і вуха собаки від бруду і відкладень, а також підрізайте кігті приблизно 3 рази в місяць. Ця порода може переносити холод, але на прогулянку взимку краще одягати вихованця в комбінезончік. Секрет їх білосніжної шерсті в тому, що на неї дуже погано налипає бруд, а очищається вона, навпаки - дуже легко. "],
//     "issues":["Вивихи колінних суглобів","Дисплазія кульшового суглоба","Алергія","Нежить, який інколи пов'язаний з алергією."],"about":"Японський шпіц - це невеликі собаки, покриті густою пухнастою шерстю. Вони дуже нагадують своїх найближчих родичів, як за зовнішнім виглядом, так і за характером. Лапи короткі, мордочка витягнута, вуха загострені, очі чорні. Хвіст пухнастий і зазвичай закручений наверх. Забарвлення виключно біле."},
//     "imgUrl":["https://res.cloudinary.com/pet-image-api/image/upload/v1586169575/Pets/yaponskiy-shpits/yaponskiy-shpits_dvriib.jpg","https://res.cloudinary.com/pet-image-api/image/upload/v1586169575/Pets/yaponskiy-shpits/sobaka_yaponskiy_shpits_ua1xaq.jpg","https://res.cloudinary.com/pet-image-api/image/upload/v1586169575/Pets/yaponskiy-shpits/yaponskiy_shpits_sobaka_r1g1ix.jpg"],
//     "_id":"5e8c4ffd4ed5f230f4c2625c",
//     "breed":"Японський шпіц",
//     "__v":0};

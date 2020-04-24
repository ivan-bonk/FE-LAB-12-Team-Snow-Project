import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {handleFetch, watchLoadPet, fetchPet} from '../../pet/sagas/pet.saga';
import {fetchPetProfile} from '../../pet/actions/pet.actions';
import { PetProfile } from 'shared/models';

const res:PetProfile = {"characteristics":{"popularity":2,"training":4,"size":2,"brain":4,"security":3,"childFriendly":5,"agility":4,"problematic":3},"observations":{"country":"Японія","lifetime":"12-15 років","height":"34-37 см","weight":"6-7 кг","price":"600 - 1000 $","carePrice":'720',"careTime":2,"careComplications":"average","walkNumber":2,"mealNumber":2,"mealWeight":180,"medCheckUp":2},"ownerInfo":{"easyTrain":true,"familyFit":true,"apartmentFit":true,"hypoallergenicity":false},"additionalInfo":{"specialties":["Японський шпіц потребує вичісування шерсті один-два рази на тиждень, купати його потрібно приблизно з такою ж періодичністю. Якщо ваш вихованець любить спати з вами в ліжку, краще його купати кожен день.Очищайте очі і вуха собаки від бруду і відкладень, а також підрізайте кігті приблизно 3 рази в місяць. Ця порода може переносити холод, але на прогулянку взимку краще одягати вихованця в комбінезончік. Секрет їх білосніжної шерсті в тому, що на неї дуже погано налипає бруд, а очищається вона, навпаки - дуже легко. "],"issues":["Вивихи колінних суглобів","Дисплазія кульшового суглоба","Алергія","Нежить, який інколи пов'язаний з алергією."],"about":"Японський шпіц - це невеликі собаки, покриті густою пухнастою шерстю. Вони дуже нагадують своїх найближчих родичів, як за зовнішнім виглядом, так і за характером. Лапи короткі, мордочка витягнута, вуха загострені, очі чорні. Хвіст пухнастий і зазвичай закручений наверх. Забарвлення виключно біле."},"imgUrl":["https://res.cloudinary.com/pet-image-api/image/upload/v1586169575/Pets/yaponskiy-shpits/yaponskiy-shpits_dvriib.jpg","https://res.cloudinary.com/pet-image-api/image/upload/v1586169575/Pets/yaponskiy-shpits/sobaka_yaponskiy_shpits_ua1xaq.jpg","https://res.cloudinary.com/pet-image-api/image/upload/v1586169575/Pets/yaponskiy-shpits/yaponskiy_shpits_sobaka_r1g1ix.jpg"],"_id":"5e8c4ffd4ed5f230f4c2625c","breed":"Японський шпіц","__v":0};

describe('test fetchPetProfile function', () => {
    const genObject = watchLoadPet();
    
    it('should wait for every FETCH action and call handleFetch', () => {
        expect(genObject.next().value)
        .toEqual(takeEvery(fetchPetProfile.request, handleFetch));
    });
    it('should request and return petProfile with specifiid id', async () => {
      const data = await fetchPet('5e8c4ffd4ed5f230f4c2625c');
      expect(data).toStrictEqual(res);
  });
});

describe('test full pet saga - error', () => {
    it('should call api and dispatch success action', async () => {
      const dispatched: any[] = [];
      const result = await runSaga({
        dispatch: (action) => dispatched.push(action),
      }, handleFetch, {payload:'5e8c4'}).toPromise(); 
      expect(dispatched).toEqual([fetchPetProfile.failure('Невідома помилка :(')]);
    });
})


describe('test full pet saga - success', () => {
    it('should call api and dispatch success action', async () => {
      const dispatched: any[] = [];
      const result = await runSaga({
        dispatch: (action) => dispatched.push(action),
      }, handleFetch, {payload:'5e8c4ffd4ed5f230f4c2625c'}).toPromise(); 
      expect(dispatched).toEqual([fetchPetProfile.success(res)]);
    });
})

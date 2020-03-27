import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchAction } from '../../../store/actions/search.action';
import { SearchInterface } from '../search.interfaces';

export const ModalBody: React.FC<SearchInterface> = (props: SearchInterface) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: {}): void => {
    dispatch(searchAction(data));
    history.push('/result');
  };

  const [time, setTime] = useState('0');
  const [posTime, setPosTime] = useState(0);

  const [money, setMoney] = useState('0');
  const [posMoney, setPosMoney] = useState(0);

  const [security, setSecurity] = useState('0');
  const [posSecurity, setPosSecurity] = useState(0);

  return (
    <span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="range-slider">
          <label>Щодня зможу проводити з ним</label>
          <br />
          <output htmlFor="timeWolk" style={{ left: `${posTime}px` }}>
            {time}хв
          </output>
          <input
            type="range"
            name="timeWolk"
            ref={register}
            min="0"
            max="60"
            step="1"
            value={time}
            onChange={(e): any => {
              setPosTime(+e.target.value * e.target.offsetWidth * 0.0155);
              setTime(e.target.value);
            }}
          />
        </section>
        <section className="range-slider">
          <label>На місяць зможу витрачати максимум</label>
          <br />
          <output htmlFor="moneyPerMonth" style={{ left: `${posMoney}px` }}>
            {money}грн
          </output>
          <input
            type="range"
            name="moneyPerMonth"
            ref={register}
            min="0"
            max="1000"
            step="50"
            value={money}
            onChange={(e): any => {
              setPosMoney(+e.target.value * e.target.offsetWidth * 0.00087);
              setMoney(e.target.value);
            }}
          />
        </section>

        <h2>Зможу осилити час догляду</h2>
        <section className="checkboxes form_radio_group">
          <input id="radio-1" type="radio" name="timePerMonth" value="low" ref={register({ required: true })} />
          <label htmlFor="radio-1">Низьку</label>
          <input id="radio-2" type="radio" name="timePerMonth" value="average" ref={register({ required: true })} />
          <label htmlFor="radio-2">Середню</label>
          <input id="radio-3" type="radio" name="timePerMonth" value="high" ref={register({ required: true })} />
          <label htmlFor="radio-3">Високу</label>
          <input id="radio-4" type="radio" name="timePerMonth" value="any" ref={register({ required: true })} />
          <label htmlFor="radio-4">Любу</label>
        </section>
        {errors.exampleRequired && <span>This field is required</span>}

        <section className="range-slider">
          <label>Захисник та охоронець на</label>
          <br />
          <output htmlFor="moneyPerMonth" style={{ left: `${posSecurity}px` }}>
            {' '}
            {security}%{' '}
          </output>
          <input
            type="range"
            name="securityLevel"
            ref={register}
            min="0"
            max="100"
            step="5"
            value={security}
            onChange={(e): any => {
              setPosSecurity(+e.target.value * e.target.offsetWidth * 0.0091);
              setSecurity(e.target.value);
            }}
          />
        </section>

        <h2>Розмір собаки</h2>
        <section className="checkboxes form_radio_group">
          <input type="radio" id="radio-5" name="petSize" value="any" ref={register} />
          <label htmlFor="radio-5">Любий</label>
          <input type="radio" id="radio-6" name="petSize" value="low" ref={register} />
          <label htmlFor="radio-6">S</label>
          <input type="radio" id="radio-7" name="petSize" value="average" ref={register} />
          <label htmlFor="radio-7">M</label>
          <input type="radio" id="radio-8" name="petSize" value="high" ref={register} />
          <label htmlFor="radio-8">L</label>
        </section>

        <section className="checkboxes general">
          <label>
            Легко дресерувати
            <div className="switch">
              <input type="checkbox" name="easyToTrain" ref={register} />
              <span className="slider"></span>
            </div>
          </label>
          <label>
            Ідеальний для сімї
            <div className="switch">
              <input type="checkbox" name="family" ref={register} />
              <span className="slider"></span>
            </div>
          </label>
          <label>
            Підходить для квартири
            <div className="switch">
              <input type="checkbox" name="apartment" ref={register} />
              <span className="slider"></span>
            </div>
          </label>
          <label>
            Упс, в мене алергія
            <div className="switch">
              <input type="checkbox" name="allergy" ref={register} />
              <span className="slider"></span>
            </div>
          </label>
        </section>

        <button type="submit" className="btn btn-apply">
          Застосувати
        </button>
        <button className="btn btn-cancel" onClick={props.closeModal}>
          Закрити
        </button>
      </form>
    </span>
  );
};

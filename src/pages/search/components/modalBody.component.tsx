import React from 'react';
import { useForm } from 'react-hook-form';

type HomeProps = {
  closeModal: any;
};

export const ModalBody: React.FC<HomeProps> = (props: HomeProps) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: {}): void => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Щодня зможу проводити з ним</h2>
        <input type="range" name="timeWolk" ref={register} min="0" max="60" step="1" />

        <h2>На місяць зможу витрачати максимум</h2>
        <input type="range" name="money" ref={register} min="0" max="1000" step="50" />

        <h2>Зможу осилити час догляду</h2>
        <section className="checkboxes time-month">
          <input type="radio" name="timePerMonth" value="low" ref={register({ required: true })} />
          <input type="radio" name="timePerMonth" value="average" ref={register({ required: true })} />
          <input type="radio" name="timePerMonth" value="high" ref={register({ required: true })} />
          <input type="radio" name="timePerMonth" value="any" ref={register({ required: true })} />
        </section>
        {errors.exampleRequired && <span>This field is required</span>}

        <h2>Захисник та охоронець на</h2>
        <input type="range" name="securityLevel" ref={register} min="0" max="100" step="5" />

        <h2>Розмір собаки</h2>
        <section className="checkboxes pet-size">
          <input type="radio" name="petSize" value="low" ref={register} />
          <input type="radio" name="petSize" value="average" ref={register} />
          <input type="radio" name="petSize" value="high" ref={register} />
          <input type="radio" name="petSize" value="any" ref={register} />
        </section>

        <section className="checkboxes general">
          <label>
            Легко дресерувати
            <input type="checkbox" name="easyToTrain" ref={register} />
          </label>
          <label>
            Ідеальний для сімї
            <input type="checkbox" name="family" ref={register} />
          </label>
          <label>
            Підходить для квартири
            <input type="checkbox" name="apartment" ref={register} />
          </label>
          <label>
            Упс, в мене алергія <input type="checkbox" name="allergy" ref={register} />
          </label>
        </section>

        <button type="submit" className="btn btn-apply">
          Застосувати
        </button>
        <button className="btn btn-cancel" onClick={props.closeModal}>
          Закрити
        </button>
      </form>
    </div>
  );
};

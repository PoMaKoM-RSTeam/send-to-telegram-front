import React from 'react';
import './moderation.scss';
import plug from '../../resources/img/plug.jpg';

function Moderation() {
  return (
    <div className='page-moderation'>
      <header className='header'>
        <h2 className='title'>Модерация</h2>
        <div className='setting-wrapper'>
          <button className='btn-add-item' type='button'>+</button>
          <button className='btn-setting' type='button'>&#9776;&nbsp; Настройки</button>
        </div>
      </header>
      <div className='filter-wrapper'>
        <div className='filter-list'>
          <button className='btn-filter-list' type='button'>Применить фильтр</button>
          <button className='btn-filter-list' type='button'>Изменить вид столбцов</button>
          <h3 className='count-item'>
            Количество пользоватей:
            <span>2</span>
          </h3>
        </div>
        <input className='search-input' type="text" placeholder="&#x1F50D;&nbsp; Введите текст" />
      </div>
      <div className='filter-item'>
        <button className='btn-filter-item' type='button'>Пользователь &#9650;</button>
        <button className='btn-filter-item' type='button'>Юзернейм &#9650;</button>
        <button className='btn-filter-item' type='button'>Категория &#9650;</button>
        <button className='btn-filter-item' type='button'>Сообщений &#9650;</button>
        <span className='span-#' />
      </div>
      <div className='item-list-wrapper'>
        <ul>
          <li className='list-group-item'>
            <div className='img-wrapper'>
              <img className='img-avatar' src={plug} alt="img" />
              <span className='user-name'>Roma Komarov</span>
            </div>
            <a href="google.com" className='userName'>@PoMa_KoM</a>
            <span className='category'>Moderator</span>
            <span className='count-message'>5</span>
            <button className='btn-item-setting' type='button'><i>&#10247;</i></button>
          </li>
          <li className='list-group-item'>
            <div className='img-wrapper'>
              <img className='img-avatar' src={plug} alt="img" />
              <span className='user-name'>Alex</span>
            </div>
            <a href="google.com" className='userName'>@Alex</a>
            <span className='category'>Админ</span>
            <span className='count-message'>2</span>
            <button className='btn-item-setting' type='button'><i>&#10247;</i></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Moderation;

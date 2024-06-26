import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='container'>

        <form>
          <input
            type='search'
            placeholder='Buscar produtos'
            className='search__input'
            required/>

            <button type='submit' className='search__button'>
              icone
            </button>
        </form>

      </div>
    </header>
  );
}

export default Header;
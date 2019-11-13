import React from 'react';

const Ingredient = (props) => {

  let items = [];

  for(var i=1;i<=15;i++) {
    if(props,props.detail["strIngredient"+i] != null) {

      let name_file = props.detail["strIngredient"+i];
      let name_meas = props.detail["strMeasure"+i];

      items.push(
        <div key={i} className="col-6 col-lg-4">
          <div className="pic-show -style-1">
              <img src={"https://www.thecocktaildb.com/images/ingredients/"+name_file+".png"} alt="" />
            </div>
    <div className="pic-title -style-1">{name_file}<br/>{name_meas}</div>
        </div>
      )

    }
    

  }

  return (
  <div className="pic-sect -sect-style2">
    <h2 className="pic-head">Ingredients</h2>
                  
    <div className="pic-box">
      <div className="row">
        
        {items}

      </div>
    </div>

  </div>
  )
}

export default Ingredient;
const menuItems = [
  {category:"Entradas",name:"Tostada Salmón",portion:"1 unidade",description:"Tortilha de milho com tartar de salmão, guacamole e quinoa crocante, finalizado com flor de sal.",price:"R$ 37"},
  {category:"Entradas",name:"Causita La Mar",description:"Purê de batata fria com ajíes peruanas, molho acevichado e cinzas de tortilha.",price:"Peixe branco R$ 40 · Salmão R$ 43"},
  {category:"Entradas",name:"Guacamole da Casa",vegetarian:true,description:"Abacate cremoso, tomate e coentro. Acompanha tortilha de milho crocante.",price:"R$ 35"},
  {category:"Entradas",name:"Gyoza Chipotle",portion:"5 unidades",description:"Recheio de porco e vegetais ao molho cremoso de chiles defumados, finalizado com cebolas encurtidas.",price:"R$ 40"},
  {category:"Entradas",name:"Flautas Criollas",portion:"4 unidades",description:"Tortilha de milho crocante recheada de frango, assada com molho huancaína, queijo minas e creme cítrico.",price:"R$ 42"},
  {category:"Entradas",name:"Batatas '93",vegetarian:true,description:"Batatas rústicas com guacamole da casa e molho defumado.",price:"R$ 32"},
  {category:"Entradas",name:"Totopos Charros",vegetarian:true,description:"Feijão com tempero mexicano, queijo e coentro. Acompanha tortilha de milho crocante.",price:"R$ 30"},
  {category:"Ceviches",name:"Aguachile",description:"Camarão e peixe ao molho cítrico, jalapeño, pepinos e cebolas. Acompanha torradas de milho.",price:"R$ 52"},
  {category:"Ceviches",name:"Salmão Andino",description:"Molho agridoce com tamarindo, chalotas e pepinos frescos, quinoa crocante e chips de banana-da-terra.",price:"R$ 52"},
  {category:"Ceviches",name:"Ceviche Clássico",description:"Peixe com leite de tigre, cebola, coentro e milho peruano. Acompanha batata-doce glaceada.",price:"R$ 48"},
  {category:"Ceviches",name:"Trio de Ceviches",description:"Pequenas porções em grande sabor.",price:"R$ 78"},
  {category:"Tacos",name:"Chicharrón",portion:"3 unidades · tortillas de maíz",description:"Porco confitado e frito com batata-doce glaceada, cebola roxa e molho de ajíes.",price:"R$ 42"},
  {category:"Tacos",name:"Costela Norteña",portion:"3 unidades · tortillas de maíz",description:"Costela cozida por 5 horas e desfiada, com tempero da casa, batata e chalotas em conserva.",price:"R$ 44"},
  {category:"Tacos",name:"Al Pastor",portion:"3 unidades · tortillas de maíz",description:"Porco com tempero mexicano, cebola, coentro e abacaxi grelhado.",price:"R$ 42"},
  {category:"Tacos",name:"Quesadillas",portion:"3 unidades · tortillas de maíz",vegetarian:true,description:"Queijo, cogumelos, feijão e guacamole da casa.",price:"R$ 39"},
  {category:"Tacos",name:"Pescado Acevichado",portion:"3 unidades · tortillas de maíz",description:"Peixe empanizado ao panko com molho cítrico e pico de gallo.",price:"R$ 44"},
  {category:"Tacos",name:"Chingona de Camarão",portion:"3 unidades · tortillas de maíz",description:"Cebola, tomate e pimentão, flambados com pisco e queijo.",price:"R$ 44"},
  {category:"Tacos",name:"Chingona de Alcatra",portion:"3 unidades · tortillas de maíz",description:"Cebola, tomate e pimentão, flambados com pisco e queijo.",price:"R$ 42"},
  {category:"Principais",name:"Pirarucu Mestizo",description:"Peixe amazônico com molho de chiles tatemados e cinza de tortillas. Acompanha arroz com banana-da-terra.",price:"R$ 62"},
  {category:"Principais",name:"Ossobuco de los Andes",description:"Braseado e cozido lentamente com milho roxo peruano e vegetais. Acompanha purê de batatas cremoso.",price:"R$ 68"},
  {category:"Principais",name:"Lomo Saltado",description:"Pisco, cebola, tomate, pimentão e molho peruano. Acompanha arroz e batatas rústicas.",price:"Frango R$ 50 · Alcatra R$ 55 · Mignon R$ 62"},
  {category:"Principais",name:"Arroz Meloso",description:"Tempero da casa, chile guajillo, abobrinha e pimentões, finalizado com molho cítrico e pico de gallo.",price:"Peixe branco R$ 65 · Salmão ou camarão R$ 68"},
  {category:"Principais",name:"Chilaquiles Rojos",vegetarian:true,description:"Totopos de milho crocante com molho de jitomate e panca, queijo minas e crema. Acompanha feijão charros.",price:"Vegetariano R$ 50 · Mignon R$ 59"},
  {category:"Principais",name:"Parrilla a la Mexicana",description:"Mix de vegetais e proteína flambada com tequila e queijo. Acompanha feijão charros, tortilla de milho e guacamole.",price:"Alcatra R$ 65 · Mignon R$ 69"},
  {category:"Principais",name:"Pescado Acapulco",description:"Filé de peixe com bisque de camarão e chipotle. Acompanha vegetais grelhados e arroz.",price:"Peixe branco R$ 65 · Salmão R$ 68"},
  {category:"Principais",name:"Mole da Casa",description:"Filé de frango grelhado com molho de chocolate e especiarias mexicanas com gergelim branco. Acompanha tortilla e arroz.",price:"R$ 59 · consultar disponibilidade"},
  {category:"Sobremesas & café",name:"Xocolat Nutella",description:"Bolo três leites macio e delicadamente umedecido, com finalização de Nutella cremosa.",price:"R$ 25"},
  {category:"Sobremesas & café",name:"Dulce Azteca",description:"Pudim de milho cremoso com pipoca e calda de caramelo tequilero. Acompanha sorvete de baunilha.",price:"R$ 28"},
  {category:"Sobremesas & café",name:"Suspiro Limeño",description:"Doce tradicional peruano, manjar artesanal finalizado com merengue gratinado e canela.",price:"R$ 16"},
  {category:"Sobremesas & café",name:"Alfajor",description:"Bolacha caseira recheada com doce de leite artesanal da casa.",price:"R$ 11"},
  {category:"Sobremesas & café",name:"Café",description:"Para fechar a mesa com uma pausa.",price:"R$ 7,50"},
  {category:"Bebidas",name:"Jamaica",description:"Água fresca de flor de hibisco.",price:"R$ 14"},
  {category:"Bebidas",name:"Del Bosque",description:"Mix de frutas vermelhas e hortelã.",price:"R$ 14"},
  {category:"Bebidas",name:"Chicha Morada",description:"Milho roxo com canela, abacaxi e limão.",price:"R$ 16"},
  {category:"Bebidas",name:"Abacaxi",description:"Abacaxi, laranja e hortelã.",price:"R$ 12"},
  {category:"Bebidas",name:"Inca Kola Peruana",portion:"600 ml",description:"Refrigerante peruano. Consulte disponibilidade.",price:"R$ 35"},
  {category:"Drinks & cervejas",name:"Cantarito al Pastor",description:"Tequila José Cuervo, abacaxi defumado e flor de sal.",price:"R$ 40"},
  {category:"Drinks & cervejas",name:"Tequila, Hibisco & Chamoy",description:"Tequila José Cuervo, geleia de hibisco e chamoy.",price:"R$ 34"},
  {category:"Drinks & cervejas",name:"Lima Mia",description:"Pisco peruano Barsol, ginger ale, lima e morango.",price:"R$ 34"},
  {category:"Drinks & cervejas",name:"Paloma",description:"Tequila José Cuervo Citrus, toranja com borda de chamoy.",price:"R$ 34"},
  {category:"Drinks & cervejas",name:"Margarita ou Mezcalita",description:"Tequila José Cuervo, Cointreau e limão com borda de chamoy.",price:"Margarita R$ 39 · Mezcalita R$ 50"},
  {category:"Drinks & cervejas",name:"Pisco Sour",description:"Pisco peruano Barsol, limão, xarope e Angostura bitters.",price:"R$ 36"},
  {category:"Drinks & cervejas",name:"Michelada",description:"Cerveja com tempero mexicano.",price:"R$ 29"},
  {category:"Drinks & cervejas",name:"Cusqueña",portion:"long neck · cerveja peruana",description:"Cerveja peruana gelada.",price:"R$ 25"},
  {category:"Drinks & cervejas",name:"Maniacs",portion:"long neck · cerveja artesanal",description:"Cerveja artesanal.",price:"R$ 18"},
  {category:"Drinks & cervejas",name:"Corona y Sol",portion:"long neck",description:"Consulte a equipe sobre a disponibilidade.",price:"R$ 13"}
];

const menuPhotos={
  "Tostada Salmón":"assets/img/ceviche.jpg",
  "Causita La Mar":"assets/img/causita.jpg",
  "Guacamole da Casa":"assets/img/guacamole.jpg",
  "Flautas Criollas":"assets/img/flautas.jpg",
  "Batatas '93":"assets/img/guacamole.jpg",
  "Aguachile":"assets/img/ceviche.jpg",
  "Salmón Andino":"assets/img/ceviche.jpg",
  "Ceviche Clássico":"assets/img/ceviche.jpg",
  "Lomo Saltado":"assets/img/lomo-saltado.jpg",
  "Mole da Casa":"assets/img/mole.jpg",
  "Xocolat Nutella":"assets/img/sobremesa-chocolate.jpg",
  "Dulce Azteca":"assets/img/sobremesa-milho.jpg",
  "Alfajor":"assets/img/alfajor.jpg",
  "Chicha Morada":"assets/img/chicha-morada.jpg",
  "Cantarito al Pastor":"assets/img/cocktail.jpg",
  "Paloma":"assets/img/paloma.jpg",
  "Pisco Sour":"assets/img/pisco-sour.jpg"
};
const categoryPhotos={
  "Entradas":["assets/img/flautas.jpg","assets/img/guacamole.jpg","assets/img/causita.jpg"],
  "Ceviches":["assets/img/ceviche.jpg","assets/img/causita.jpg"],
  "Tacos":["assets/img/flautas.jpg","assets/img/lomo-saltado.jpg","assets/img/guacamole.jpg"],
  "Principais":["assets/img/lomo-saltado.jpg","assets/img/mole.jpg","assets/img/ceviche.jpg"],
  "Sobremesas & café":["assets/img/sobremesa-chocolate.jpg","assets/img/alfajor.jpg","assets/img/sobremesa-milho.jpg"],
  "Bebidas":["assets/img/chicha-morada.jpg","assets/img/cocktail.jpg","assets/img/paloma.jpg"],
  "Drinks & cervejas":["assets/img/cocktail.jpg","assets/img/paloma.jpg","assets/img/pisco-sour.jpg"]
};
const menuGrid=document.querySelector("#menu-grid");
const menuCount=document.querySelector("#menu-count");
const searchInput=document.querySelector("#menu-search");
const categoryGroups=new Map();
const categoryOffsets=Object.create(null);

function imageForMenuItem(item,categoryIndex){
  const options=categoryPhotos[item.category];
  return menuPhotos[item.name]||options[categoryIndex%options.length];
}

function createCategoryGroup(category,firstItem,categoryIndex){
  const section=document.createElement("section");
  section.className="menu-category-group";
  section.dataset.category=category;
  const toggle=document.createElement("button");
  toggle.className="menu-category-toggle";
  toggle.type="button";
  toggle.setAttribute("aria-expanded","false");
  const thumb=document.createElement("img");
  thumb.className="menu-group-thumb";
  thumb.src=imageForMenuItem(firstItem,categoryIndex);
  thumb.alt="";
  thumb.setAttribute("aria-hidden","true");
  const copy=document.createElement("span");
  copy.className="menu-category-copy";
  const title=document.createElement("strong");
  title.textContent=category;
  const count=document.createElement("small");
  count.className="menu-category-count";
  copy.appendChild(title);
  copy.appendChild(count);
  const indicator=document.createElement("span");
  indicator.className="menu-category-indicator";
  indicator.setAttribute("aria-hidden","true");
  toggle.appendChild(thumb);
  toggle.appendChild(copy);
  toggle.appendChild(indicator);
  const items=document.createElement("div");
  items.className="menu-category-items";
  toggle.addEventListener("click",function(){
    const isOpen=section.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded",String(isOpen));
  });
  section.appendChild(toggle);
  section.appendChild(items);
  menuGrid.appendChild(section);
  categoryGroups.set(category,section);
  return section;
}

function createMenuCard(item,index,categoryIndex){
  const article=document.createElement("article");
  article.className="menu-card";
  article.dataset.search=[item.name,item.description,item.category,item.price].join(" ").toLocaleLowerCase("pt-BR");
  article.style.animationDelay=Math.min(index*24,260)+"ms";
  const photoFrame=document.createElement("div");
  photoFrame.className="menu-card-visual";
  const photo=document.createElement("img");
  photo.className="menu-card-photo";
  photo.src=imageForMenuItem(item,categoryIndex);
  photo.alt="Prato do cardápio La Chingona";
  photo.loading="lazy";
  photo.decoding="async";
  photoFrame.appendChild(photo);
  article.appendChild(photoFrame);
  const head=document.createElement("div");
  head.className="menu-card-head";
  const title=document.createElement("h3");
  title.textContent=item.name;
  head.appendChild(title);
  if(item.vegetarian){
    const tag=document.createElement("span");
    tag.className="menu-tag";
    tag.textContent="vegetariano";
    head.appendChild(tag);
  }
  const price=document.createElement("div");
  price.className="menu-price";
  price.textContent=item.price;
  const description=document.createElement("p");
  description.textContent=item.description+(item.portion?" · "+item.portion:"");
  const categoryLabel=document.createElement("div");
  categoryLabel.className="menu-category";
  categoryLabel.textContent=item.category;
  article.appendChild(head);
  article.appendChild(price);
  article.appendChild(description);
  article.appendChild(categoryLabel);
  return article;
}

menuItems.forEach(function(item,index){
  const categoryIndex=categoryOffsets[item.category]||0;
  let group=categoryGroups.get(item.category);
  if(!group) group=createCategoryGroup(item.category,item,categoryIndex);
  group.querySelector(".menu-category-items").appendChild(createMenuCard(item,index,categoryIndex));
  categoryOffsets[item.category]=categoryIndex+1;
});
categoryGroups.forEach(function(group){
  const count=group.querySelectorAll(".menu-card").length;
  group.querySelector(".menu-category-count").textContent=count+(count===1?" prato":" pratos");
});

function updateMenu(){
  const query=searchInput.value.trim().toLocaleLowerCase("pt-BR");
  let visible=0;
  categoryGroups.forEach(function(group){
    const cards=Array.from(group.querySelectorAll(".menu-card"));
    let matching=0;
    cards.forEach(function(card){
      const matches=!query||card.dataset.search.includes(query);
      card.hidden=!matches;
      if(matches) matching++;
    });
    group.hidden=Boolean(query)&&matching===0;
    if(query){
      group.classList.toggle("is-open",matching>0);
      group.querySelector(".menu-category-toggle").setAttribute("aria-expanded",String(matching>0));
    } else {
      group.classList.remove("is-open");
      group.querySelector(".menu-category-toggle").setAttribute("aria-expanded","false");
    }
    visible+=matching;
  });
  menuCount.textContent=visible+(visible===1?" item":" itens")+(query?" encontrados":" · escolha uma categoria para abrir");
}

searchInput.addEventListener("input",updateMenu);
updateMenu();
const navToggle=document.querySelector(".nav-toggle");
const siteNav=document.querySelector("#site-nav");
navToggle.addEventListener("click",function(){
  const isOpen=siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded",String(isOpen));
  navToggle.setAttribute("aria-label",isOpen?"Fechar menu":"Abrir menu");
});
siteNav.querySelectorAll("a").forEach(function(link){
  link.addEventListener("click",function(){
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded","false");
    navToggle.setAttribute("aria-label","Abrir menu");
  });
});







const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  let newActive = event.target;
  let isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    let itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}


const state2 = {};
const carouselList2 = document.querySelector('.carousel__list2');
const carouselItems2 = document.querySelectorAll('.carousel__item2');
const elems2 = Array.from(carouselItems2);

carouselList2.addEventListener('click', function (event) {
  let newActive2 = event.target;
  let isItem2 = newActive2.closest('.carousel__item2');

  if (!isItem2 || newActive2.classList.contains('carousel__item_active2')) {
    return;
  };
  
  update2(newActive2);
});

const update2 = function(newActive2) {
  const newActivePos2 = newActive2.dataset.pos;

  const current2 = elems2.find((elem) => elem.dataset.pos == 0);
  const prev2 = elems2.find((elem) => elem.dataset.pos == -1);
  const next2 = elems2.find((elem) => elem.dataset.pos == 1);
  const first2 = elems2.find((elem) => elem.dataset.pos == -2);
  const last2 = elems2.find((elem) => elem.dataset.pos == 2);
  
  current2.classList.remove('carousel__item_active2');
  
  [current2, prev2, next2, first2, last2].forEach(item => {
    let itemPos2 = item.dataset.pos;

    item.dataset.pos = getPos2(itemPos2, newActivePos2)
  });
};

const getPos2 = function (current2, active2) {
  const diff2 = current2 - active2;

  if (Math.abs(current2 - active2) > 2) {
    return -current2
  }

  return diff2;
}




//////////////////////////////////////



const state3 = {};
const carouselList3 = document.querySelector('.carousel__list3');
const carouselItems3 = document.querySelectorAll('.carousel__item3');
const elems3 = Array.from(carouselItems3);

carouselList3.addEventListener('click', function (event) {
  let newActive3 = event.target;
  let isItem3 = newActive3.closest('.carousel__item3');

  if (!isItem3 || newActive3.classList.contains('carousel__item_active3')) {
    return;
  };
  
  update3(newActive3);
});

const update3 = function(newActive3) {
  const newActivePos3 = newActive3.dataset.pos;

  const current3 = elems3.find((elem) => elem.dataset.pos == 0);
  const prev3 = elems3.find((elem) => elem.dataset.pos == -1);
  const next3 = elems3.find((elem) => elem.dataset.pos == 1);
  const first3 = elems3.find((elem) => elem.dataset.pos == -2);
  const last3 = elems3.find((elem) => elem.dataset.pos == 2);
  
  current3.classList.remove('carousel__item_active3');
  
  [current3, prev3, next3, first3, last3].forEach(item => {
    let itemPos3 = item.dataset.pos;

    item.dataset.pos = getPos3(itemPos3, newActivePos3)
  });
};

const getPos3 = function (current3, active3) {
  const diff3 = current3 - active3;

  if (Math.abs(current3 - active3) > 2) {
    return -current3
  }

  return diff3;
}

////////////////////////////////////////////////////


const state4 = {};
const carouselList4 = document.querySelector('.carousel__list4');
const carouselItems4 = document.querySelectorAll('.carousel__item4');
const elems4 = Array.from(carouselItems4);

carouselList4.addEventListener('click', function (event) {
  let newActive4 = event.target;
  let isItem4 = newActive4.closest('.carousel__item4');

  if (!isItem4 || newActive4.classList.contains('carousel__item_active4')) {
    return;
  };
  
  update4(newActive4);
});

const update4 = function(newActive4) {
  const newActivePos4 = newActive4.dataset.pos;

  const current4 = elems4.find((elem) => elem.dataset.pos == 0);
  const prev4 = elems4.find((elem) => elem.dataset.pos == -1);
  const next4 = elems4.find((elem) => elem.dataset.pos == 1);
  const first4 = elems4.find((elem) => elem.dataset.pos == -2);
  const last4 = elems4.find((elem) => elem.dataset.pos == 2);
  
  current4.classList.remove('carousel__item_active4');
  
  [current4, prev4, next4, first4, last4].forEach(item => {
    let itemPos4 = item.dataset.pos;

    item.dataset.pos = getPos4(itemPos4, newActivePos4)
  });
};

const getPos4 = function (current4, active4) {
  const diff4 = current4 - active4;

  if (Math.abs(current4 - active4) > 2) {
    return -current4
  }

  return diff4;
}

//////////////////////////////////////////////////////////

const state5 = {};
const carouselList5 = document.querySelector('.carousel__list5');
const carouselItems5 = document.querySelectorAll('.carousel__item5');
const elems5 = Array.from(carouselItems5);

carouselList5.addEventListener('click', function (event) {
  let newActive5 = event.target;
  let isItem5 = newActive5.closest('.carousel__item5');

  if (!isItem5 || newActive5.classList.contains('carousel__item_active5')) {
    return;
  };
  
  update5(newActive5);
});

const update5 = function(newActive5) {
  const newActivePos5 = newActive5.dataset.pos;

  const current5 = elems5.find((elem) => elem.dataset.pos == 0);
  const prev5 = elems5.find((elem) => elem.dataset.pos == -1);
  const next5 = elems5.find((elem) => elem.dataset.pos == 1);
  const first5 = elems5.find((elem) => elem.dataset.pos == -2);
  const last5 = elems5.find((elem) => elem.dataset.pos == 2);
  
  current5.classList.remove('carousel__item_active5');
  
  [current5, prev5, next5, first5, last5].forEach(item => {
    let itemPos5 = item.dataset.pos;

    item.dataset.pos = getPos5(itemPos5, newActivePos5)
  });
};

const getPos5 = function (current5, active5) {
  const diff5 = current5 - active5;

  if (Math.abs(current5 - active5) > 2) {
    return -current5
  }

  return diff5;
}

///////////////////////////////////////////////////////////
const state6 = {};
const carouselList6 = document.querySelector('.carousel__list6');
const carouselItems6 = document.querySelectorAll('.carousel__item6');
const elems6 = Array.from(carouselItems6);

carouselList6.addEventListener('click', function (event) {
  let newActive6 = event.target;
  let isItem6 = newActive6.closest('.carousel__item6');

  if (!isItem6 || newActive6.classList.contains('carousel__item_active6')) {
    return;
  };
  
  update6(newActive6);
});

const update6 = function(newActive6) {
  const newActivePos6 = newActive6.dataset.pos;

  const current6 = elems6.find((elem) => elem.dataset.pos == 0);
  const prev6 = elems6.find((elem) => elem.dataset.pos == -1);
  const next6 = elems6.find((elem) => elem.dataset.pos == 1);
  const first6 = elems6.find((elem) => elem.dataset.pos == -2);
  const last6 = elems6.find((elem) => elem.dataset.pos == 2);
  
  current6.classList.remove('carousel__item_active6');
  
  [current6, prev6, next6, first6, last6].forEach(item => {
    let itemPos6 = item.dataset.pos;

    item.dataset.pos = getPos6(itemPos6, newActivePos6)
  });
};

const getPos6 = function (current6, active6) {
  const diff6 = current6 - active6;

  if (Math.abs(current6 - active6) > 2) {
    return -current6
  }

  return diff6;
}
/////////////////////////////////////////////////////
const state7 = {};
const carouselList7 = document.querySelector('.carousel__list7');
const carouselItems7 = document.querySelectorAll('.carousel__item7');
const elems7 = Array.from(carouselItems7);

carouselList7.addEventListener('click', function (event) {
  let newActive7 = event.target;
  let isItem7 = newActive7.closest('.carousel__item7');

  if (!isItem7 || newActive7.classList.contains('carousel__item_active7')) {
    return;
  };
  
  update7(newActive7);
});

const update7 = function(newActive7) {
  const newActivePos7 = newActive7.dataset.pos;

  const current7 = elems7.find((elem) => elem.dataset.pos == 0);
  const prev7 = elems7.find((elem) => elem.dataset.pos == -1);
  const next7 = elems7.find((elem) => elem.dataset.pos == 1);
  const first7 = elems7.find((elem) => elem.dataset.pos == -2);
  const last7 = elems7.find((elem) => elem.dataset.pos == 2);
  
  current7.classList.remove('carousel__item_active7');
  
  [current7, prev7, next7, first7, last7].forEach(item => {
    let itemPos7 = item.dataset.pos;

    item.dataset.pos = getPos7(itemPos7, newActivePos7)
  });
};

const getPos7 = function (current7, active7) {
  const diff7 = current7 - active7;

  if (Math.abs(current7 - active7) > 2) {
    return -current7
  }

  return diff7;
}
/////////////////////////////////////////////////////////
const state8 = {};
const carouselList8 = document.querySelector('.carousel__list8');
const carouselItems8 = document.querySelectorAll('.carousel__item8');
const elems8 = Array.from(carouselItems8);

carouselList8.addEventListener('click', function (event) {
  let newActive8 = event.target;
  let isItem8 = newActive8.closest('.carousel__item8');

  if (!isItem8 || newActive8.classList.contains('carousel__item_active8')) {
    return;
  };
  
  update8(newActive8);
});

const update8 = function(newActive8) {
  const newActivePos8 = newActive8.dataset.pos;

  const current8 = elems8.find((elem) => elem.dataset.pos == 0);
  const prev8 = elems8.find((elem) => elem.dataset.pos == -1);
  const next8 = elems8.find((elem) => elem.dataset.pos == 1);
  const first8 = elems8.find((elem) => elem.dataset.pos == -2);
  const last8 = elems8.find((elem) => elem.dataset.pos == 2);
  
  current8.classList.remove('carousel__item_active8');
  
  [current8, prev8, next8, first8, last8].forEach(item => {
    let itemPos8 = item.dataset.pos;

    item.dataset.pos = getPos8(itemPos8, newActivePos8)
  });
};

const getPos8 = function (current8, active8) {
  const diff8 = current8 - active8;

  if (Math.abs(current8 - active8) > 2) {
    return -current8
  }

  return diff8;
}
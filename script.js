//                                  //
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

//                                //
function toFa(n){ return n.toLocaleString('fa-IR'); }
const counters = document.querySelectorAll('[data-count]');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const el = e.target, target = +el.dataset.count;
      let cur = 0; const step = Math.max(1, Math.floor(target/60));
      const t = setInterval(()=>{
        cur += step; if(cur >= target){cur = target; clearInterval(t);}
        el.textContent = toFa(cur);
      },30);
      io.unobserve(el);
    }
  });
},{threshold:.5});
counters.forEach(c=>io.observe(c));

//                                //
const filterBtns = document.querySelectorAll('.filter-btns button');
const cards = document.querySelectorAll('.course-card');
filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display = (f==='all' || card.dataset.cat===f) ? 'block' : 'none';
    });
  });
});


document.getElementById("map").addEventListener("click", function(){
  window.location.href = "https://maps.app.goo.gl/vKp7zRHTgVWUVWvn7"
})
//                          //

async function saveLead(form, source) {
  const fields = form.querySelectorAll(
    'input, select, textarea'
  );

  const data = {
    full_name: fields[0].value.trim(),
    phone: fields[1].value.trim(),
    course: fields[2].value,
    source: source
  };

  if (source === 'registration') {
    data.payment_method = fields[3].value;
    data.notes = fields[4].value.trim();
  }

  const { error } = await sb
    .from('student_leads')
    .insert([data]);

  if (error) {
    console.error('Supabase error:', error);
    alert('ذخیره اطلاعات انجام نشد. دوباره تلاش کن.');
    return;
  }

  alert(
    source === 'consult'
      ? 'درخواست مشاوره با موفقیت ثبت شد.'
      : 'درخواست ثبت‌نام با موفقیت ثبت شد.'
  );

  form.reset();
}

document.getElementById('consultForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    saveLead(this, 'consult');
  });

document.getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    saveLead(this, 'registration');
  });

async function saveLead(form, source) {
  const fields = form.querySelectorAll(
    'input, select, textarea'
  );

  const data = {
    full_name: fields[0].value.trim(),
    phone: fields[1].value.trim(),
    course: fields[2].value,
    source: source
  };

  if (source === 'registration') {
    data.payment_method = fields[3].value;
    data.notes = fields[4].value.trim();
  }

  const { error } = await sb
    .from('student_leads')
    .insert([data]);

  if (error) {
    console.error('Supabase error:', error);
    alert('ذخیره اطلاعات انجام نشد. دوباره تلاش کن.');
    return;
  }

  alert(
    source === 'consult'
      ? 'درخواست مشاوره با موفقیت ثبت شد.'
      : 'درخواست ثبت‌نام با موفقیت ثبت شد.'
  );

  form.reset();
}

document.getElementById('consultForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    saveLead(this, 'consult');
  });

document.getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    saveLead(this, 'registration');
  });

document.getElementById('newsForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('عضویت شما در خبرنامه آرین مهارت ثبت شد.');
  e.target.reset();
});
//                        //
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});
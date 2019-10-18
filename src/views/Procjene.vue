<template>
<div class="container pagesContainer">
    <b-container>
      <b-row>
        <b-col class="link-box">
          <article class="link-box__container">
            <div class="link-box__container__footer">PROCJENE NEKRETNINA</div>
          </article>
          <div class="content">
            <span>
              Procjena tržišne vrijednosti nekretnina je postupak određivanja sadašnje vrijednosti nekretnine,
              koristeći odgovarajuće pristupe i metodologije, u skladu sa svrhom i predmetom procjene, uvažavajući
              trenutne lokalne tržišne uslove i druge uticaje (ekonomske, pravne, urbanističke i dr.)
            </span>
            <br>
            <br>
            <span class="my-2">
            Procjena nekretnine se vrši za potrebe pravnih i fizičkih korisnika, a u svrhu:
              <ul>
                <li>dobivanja hipotekarnog kredita</li>
                <li>kupoprodaje nekretnina tj. pomoć formiranja kupoprodajne cijene</li>
                <li>ostavinske diobe</li>
                <li>procjene vrijednosti investicionih radova, izrada troškovnika za adaptacije, rekonstrukcije i dr.</li>
                <li>utvrđivanje vrijednosti zakupa</li>
                <li>ostale poslovne transakcije</li>
              </ul>
            </span>
            <br>
            <span>
              Vršimo procjene nekretnina za potrebe pravnih i fizičkih lica u brojnim bankama.
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Procjene"
  }
</script>

<style scoped>
      .link-box {
      padding-top: 15px;
      padding-bottom: 15px;
      }

      .link-box__container {
        cursor: pointer;
        height: 300px;
        position: relative;
        background-image: url('../assets/deal.jpeg');
        background-size: cover;
        background-position: center;
      }

      .link-box__container__footer {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(69, 64, 59,0.6);
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
      }

    .content {
      padding: 25px 20px;
      background: rgba(119, 134, 147, 0.6);
      font-weight: 600;
      font-size: 17px;
      color: #fff;
      text-shadow: 1px 1px 6px #000;
      -moz-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.75);
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.75);
    }
</style>

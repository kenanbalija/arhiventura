<template>
<div class="container">
    <b-container>
      <b-row>
        <b-col class="link-box">
          <article class="link-box__container">
            <div class="link-box__container__footer">PROCJENE NEKRETNINA</div>
          </article>
        </b-col>
      </b-row>
    </b-container>
    <b-row>
      <article>
    Procjena tržišne vrijednosti nekretnina je postupak određivanja sadašnje vrijednosti nekretnine,
    koristeći odgovarajuće pristupe i metodologije, u skladu sa svrhom i predmetom procjene, uvažavajući
    trenutne lokalne tržišne uslove i druge uticaje (ekonomske, pravne, urbanističke i dr.)
    Procjena nekretnine se vrši za potrebe pravnih i fizičkih korisnika, a u svrhu:
    - dobivanja hipotekarnog kredita
    - kupoprodaje nekretnina tj. pomoć formiranja kupoprodajne cijene
    - ostavinske diobe
    - procjene vrijednosti investicionih radova, izrada troškovnika za adaptacije, rekonstrukcije i dr.
    - utvrđivanje vrijednosti zakupa
    - ostale poslovne transakcije
    Vršimo procjene nekretnina za potrebe pravnih i fizičkih lica u bankama: Sparkasse Bank, Raiffeisen
    Bank, Intesa Sanpaolo, Vakufska Banka, Sberbank, Nova Banka, NLB Banka, Addiko Banka, itd.
      </article>
    </b-row>
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
</style>
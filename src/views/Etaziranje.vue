<template>
<div class="container pagesContainer">
    <b-container>
      <b-row>
        <b-col class="link-box">
          <article class="link-box__container">
            <div class="link-box__container__footer">ETAŽIRANJE</div>
          </article>
          <div class="content">
            <span>
              ETAŽIRANJE je postupak kojim se uspostavlja etažno vlasništvo.
            </span>  
            <br>
            <br>
            <span>
              Etažno vlasništvo je vlasništvo nad stanom ili drugom samostalnom prostorijom (poslovnim prostorom, garažom) povezano s odgovarajućim suvlasničkim dijelom (idealnim dijelom) nekretnine koja se sastoji od zemljišta sa zgradom ili od prava građenja sa zgradom. Da bi se etažiranje moglo izvršiti potrebno je da je objekt u potpunosti legalan tj.upisan u Zemljišne knjige i ucrtan u Katastraski operat.
            </span>
            <br>
            <br>
            <span class="my-2">
              Dokumentacija potrebna za postupak etažiranja:
              <ul>
                <li>Zemljišnoknjižni izvadak</li>
                <li>Kopija katastarskog plana</li>
                <li>Posjedovni list</li>
                <li>Dozvole</li>
              </ul>
            </span>
            <br>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Etaziranje",
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
        background-image: url('../assets/architecture.jpg');       
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
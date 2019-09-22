<template>
<div class="container">
    <b-container>
      <b-row>
        <b-col class="link-box">
          <article class="link-box__container">
            <div class="link-box__container__footer">Kontakt</div>
          </article>
          <div class="content">
            <span class="my-2">
              Jelena Obradović Balavac d.i.a.
            </span>
            <span class="my-2">
              <ul>
                <li>Ovlašteni evropski procjenitelj, REV</li>
                <li>Sudski vještak arhitektonske struke</li>
                <li>Diplomirani inžinjer arhitekture</li>
              </ul>  
            </span>

            <span class="my-2">
              <ul>
                <li>
                  <a id="phone" href="tel:387-61-349-244">+ 387 61 349 244</a>
                </li>
                <li>
                    <a class="emailLinks" href="mailto:balavac.jelena@gmail.com">balavac.jelena@gmail.com</a>
                </li>
                <li>
                    <a class="emailLinks" href="mailto:info@arhinventura.com">info@arhinventura.com</a>
                </li>
                <li>
                    <a class="emailLinks" href="mailto:www.arhinventura.com">www.arhinventura.com</a>
                </li>
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
    name: "Kontakt"
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
        background-image: url('../assets/contactus.jpg');       
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
      text-align: center;
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

    #phone { 
      color: #fff;
      font-size: 1rem;
    }

    #phone:hover {
      text-decoration: none;
      color: #00FFA8;
    }

    .emailLinks {
      color: #fff;
    }

    .emailLinks:hover {
      text-decoration: none;
      color: #00FFA8;
    }

    ul {
      list-style: none;
    }
</style>
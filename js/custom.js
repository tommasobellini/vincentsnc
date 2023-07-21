$(document).ready(function() {
    // Sample image data with title and description
    const imageData = [
      {
        src: '../img/original_pics/1Chiesina_interna_Chiesa_Morengo_SS.Salvatore0.jpg',
        title: 'Chiesina interna Chiesa Morengo SS.Salvatore',
        description: "Prima e Dopo intervento. Tinteggiatura e decorazione chiesina interna S.S Salvatore (Morengo). Materiali: lavabile traspirante, velatura rosso pompeiano e oro.",
      },
      {
        src: '../img/original_pics/2Chiesina_interna_Chiesa_Morengo_SS.Salvatore1.jpg',
        title: `Chiesina interna Chiesa
        Morengo SS.Salvatore`,
        description: `Dettaglio a lavoro finito chiesina interna S.S Salvatore (Morengo)`,
      },
      {
        src: '../img/original_pics/3Chiesina_interna_Chiesa_Morengo_SS.Salvatore2.jpg',
        title: `Chiesina interna Chiesa
        Morengo SS.Salvatore`,
        description: `Dettaglio a lavoro finito chiesina interna S.S Salvatore (Morengo)`,
      },
      {
        src: '../img/original_pics/4Decorazioni facciata esterna Romano di L.dia.jpg',
        title: `Decorazioni facciata esterna 
        Romano di L.dia`,
        description: `Decorazione facciata balconata villa (Romano di Lombardia)`,
      },
      {
        src: '../img/original_pics/5Finto marmo preparazione.jpg',
        title: `Finto marmo preparazione`,
        description: `Fase preparatoria per finto marmo giallo (Milano)`,
      },
      {
        src: '../img/original_pics/6Finto marmo preparazione2.jpg',
        title: `Finto marmo preparazione2`,
        description: `Fondo preparatorio per finto marmo giallo (Milano)`,
      },
      {
        src: '../img/original_pics/7Finto marmo giallo.jpg',
        title: `Finto marmo giallo`,
        description: `Finto marmo giallo (Milano)`,
      },
      {
        src: '../img/original_pics/8Finto marmo bianco.jpg',
        title: `Finto marmo bianco`,
        description: `Sfondato parete TV in finto marmo bianco`,
      },
      {
        src: '../img/original_pics/9Finto marmo bianco2.jpg',
        title: `Finto marmo bianco`,
        description: `Dettaglio finto marmo bianco`,
      },
      {
        src: '../img/original_pics/10Finto marmo Milano.jpg',
        title: `Finto marmo Milano`,
        description: `Finto marmo. Materiali: smalti, acrilica, velature, pigmenti in polvere`,
      },
      {
        src: '../img/original_pics/11Finto marmo Milano2.jpg',
        title: `Finto marmo Milano`,
        description: `Dettaglio finto marmo. Materiali: smalti, acrilica, velature, pigmenti in 
        polvere`,
      },
      {
        src: '../img/original_pics/12Finto marmo avorio.jpg',
        title: `Finto marmo avorio`,
        description: `Finto marmo – avorio venato. Materiali: smalti, acrilica, velature, 
        pigmenti in polvere`,
      },
      {
        src: '../img/original_pics/13Zoccolatura esterna preparazione.jpg',
        title: `Zoccolatura esterna preparazione`,
        description: `Ripristino facciata zoccolatura esterna. Materiali malte tecniche anti 
        umidità di risalita`,
      },
      {
        src: '../img/original_pics/14Zoccolatura esterna.jpg',
        title: `Zoccolatura esterna`,
        description: `Prima e dopo intervento di ripristino zoccolatura esterna con malte 
        tecniche apposite per l’umidità. Tinteggiatura con silossanica acrilica`,
      },
      {
        src: '../img/original_pics/15Facciata-in-silossanica-arancio.jpg',
        title: `Facciata in silossanica
        arancio`,
        description: `Tinteggiatura facciata villetta con silossanica acrilica e quarzo`,
      },
      {
        src: '../img/original_pics/16Facciata-in-silossanica-arancio-e-bicomponente-grigio-soglie-gradini.jpg',
        title: `Facciata in silossanica
        arancio e bicomponente
        grigio soglie gradini`,
        description: `Tinteggiatura facciata villetta con silossanica acrilica e verniciatura soglie 
        gradini con bicomponente all’acqua`,
      },
      {
        src: '../img/original_pics/17ilpensatore.jpg',
        title: `Il pensatore`,
        description: `Affresco su parete ingresso. Materiali: pigmenti in polvere e velature`,
      },
      {
        src: '../img/original_pics/18Porta in finto ferro arrugginito.jpg',
        title: `Porta in finto ferro arrugginito`,
        description: `Tecnica finto ferro ossidato. Materiali: acrilici gesso e smalti.`,
      },
      {
        src: '../img/original_pics/19decorazioneflorealeclassica.jpg',
        title: `Decorazione floreale
        classica`,
        description: `Decorazione cappa camino. Materiali: acrilici e foglia oro`,
      },
      {
        src: '../img/original_pics/20Dipinto su lastra di ardesia - il peso del tempo.jpg',
        title: `Il peso del tempo`,
        description: `Dipinto su lastra di ardesia intitolata “Il peso del Tempo”. Materiali:
        acrilici e velature`,
      },
      {
        src: '../img/original_pics/21esistereovivere.jpg',
        title: `Esistere o vivere`,
        description: `Dipinto su carta intelaiata. Materiali: Grafite, carboncini, acrilici, smalti.`,
      },
      {
        src: '../img/original_pics/22joker.jpg',
        title: `Joker`,
        description: `Dipinto su tela in acrilico`,
      },
      {
        src: '../img/original_pics/23La_Passione.jpg',
        title: `La Passione`,
        description: `Dipinto tempera su tavola`,
      },
      {
        src: '../img/original_pics/24mandela.jpg',
        title: `Mandela`,
        description: `Dipinto acrilica su tavola`,
      },
      {
        src: '../img/original_pics/25Uomo_bilancia.jpg',
        title: `Uomo bilancia`,
        description: `Dipinto in tecnica mista. Materiali: legno, vernice spray, acrilici, resine, 
        smalti.`,
      },
      {
        src: "../img/original_pics/26Una prigone d'oro.jpg",
        title: `Una prigione d’oro`,
        description: `Dipinto in tecnica mista. Materiali: acrilici, 
        smalti,grafite,carboncino,plastica,glitter`,
      },
    ];
  
    const imageGallery = $('#imageGallery');
  
    // Loop through imageData to add images to the gallery
    imageData.forEach(image => {
        const imageHTML = `
        <div class="col-md-4 my-4">
          <img src="${image.src}" class="img-thumbnail" alt="${image.title}" data-toggle="modal" data-target="#imageModal" data-title="${image.title}" data-description="${image.description}" data-image="${image.src}">
        </div>
      `;
      imageGallery.append(imageHTML);
    });
  
    // Handle click event to show modal with title and description
    $('#imageModal').on('show.bs.modal', function(event) {
      const triggerElement = $(event.relatedTarget); // Element that triggered the modal
      const title = triggerElement.data('title');
      const description = triggerElement.data('description');
      const imageSrc = triggerElement.data('image');

      const modal = $(this);
      modal.find('.modal-title').text(title);
      modal.find('#imageDescription').text(description);
      modal.find('#modalImage').attr('src', imageSrc);
    });
  });
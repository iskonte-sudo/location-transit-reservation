document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = new FormData(this);
  const msg = `Bonjour, je souhaite réserver un transport.\n\nNom : ${f.get('name')}\nTéléphone : ${f.get('phone')}\nDate : ${f.get('date')}\nHeure : ${f.get('time')}\nDépart : ${f.get('pickup')}\nDestination : ${f.get('destination')}\nPassagers : ${f.get('passengers')}\nVéhicule : ${f.get('vehicle')}\nService : ${f.get('service')}\nDemande particulière : ${f.get('message') || 'Aucune'}`;
  // WhatsApp Belgique fourni : 0032 466 31 56 78 -> format international sans + ni espaces
  const whatsapp = '32466315678';
  window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`;
});

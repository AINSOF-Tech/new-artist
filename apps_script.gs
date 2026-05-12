// AINSOF — New Artist Onboarding endpoint
// Deploy as Web App, execute as "Me", access "Anyone"
// Then paste the deployment URL into index.html (var ENDPOINT)

const SHEET_ID = '1ELQ4h5ZP_Z6TcLk1NzkzkM3Y1K14ZMA2aat1Ch-xs6c';
const SHEET_NAME = "Artist's Personal Information";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    const row = [
      new Date(),                      // Timestamp
      data.first_name || '',
      data.last_name || '',
      data.company || '',
      data.address || '',
      data.email || '',
      data.phone || '',
      data.id_number || '',
      data.citizenship || '',
      data.performing_rights || '',
      data.mechanical_rights || '',
      data.ipi || '',
      data.pseudonym || '',
      data.artist_type || '',
      data.label_or_agency || '',
      data.production_styles || '',
      data.comments || '',
      data.apple_music || '',
      data.spotify || '',
      data.streaming_profile_name || '',
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'AINSOF endpoint alive' }))
    .setMimeType(ContentService.MimeType.JSON);
}

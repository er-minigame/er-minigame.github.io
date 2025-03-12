const GenerateMinigameElement = ({ Title, Desc, PlayUrl, PreviewImageUrl }) => `
<div class="er_minigame_item">
  <div class="er_minigame_img">
    <img src="${PreviewImageUrl}" />
  </div>
  <div class="er_minigame_info">
    <div class="er_minigame_info_container">
      <div class="er_minigame_title_container">
        <strong class="er_minigame_title">${Title}</strong>
      </div>
      <div class="er_minigame_desc_container">
        <span class="er_minigame_desc">${Desc}</span>
      </div>
      <a class="er_minigame_play_button" href="${PlayUrl}" rel="noopener noreferrer" target="_blank">
        <span class="er_minigame_play_text">PLAY!</span>
      </a>
    </div>
  </div>
</div>
`;

const fetchGameData = async () => {
  const response = await fetch("https://api.runelightentertainment.com/game/list/");

  return response.json();
}

async function main() {
  const div = document.querySelector('#main');

  if (!div) {
    return;
  }
  const view = div.querySelector('.er_minigame_content');
  const data = await fetchGameData();

  data.forEach((info) => {
    if (info.PlayUrl) {
      view.insertAdjacentHTML('beforeend', GenerateMinigameElement(info));
    }
  });
}

window.addEventListener('load', main, { once: true });
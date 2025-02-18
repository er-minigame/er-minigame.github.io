const GenerateMinigameElement = ({ Title, Desc, PlayUrl, PreviewImageUrl }) => `
<a class="er_minigame_item" href="${PlayUrl}" rel="noopener noreferrer" target="_blank">
  <div class="er_minigame_img">
    <img src="${PreviewImageUrl}" />
  </div>
  <div class="er_minigame_info">
    <div class="er_minigame_info_container">
      <strong class="er_minigame_title">${Title}</strong>
      <div class="er_minigame_desc_container">
        <span class="er_minigame_desc">${Desc}</span>
      </div>
    </div>
  </div>
</a>
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
import createCustomElement from '../utilis/createCustomElement.js';
import icons from '../icons.js';

export default ( data ) => {

const { title = 'Название ресторана' } = data;

// preview
const preview = createCustomElement({ classes: `preview`});

// preview__logo
const previewLogo = createCustomElement({ classes: `preview__logo`});
preview.append(previewLogo);

// preview__logo-img
const previewLogoImg = createCustomElement({ 
    tag: 'img', 
    classes: `preview__logo-img`, 
    attributes: {
    src: 'https://eda.yandex/images/3439767/60cc137523f6a8e0750404068edf6ecf-1100x825.jpg'
}
}); 

previewLogo.append(previewLogoImg);

// preview__gradient
const previewGradient = createCustomElement({classes: `preview__gradient`});
preview.append(previewGradient);

// preview__title
const previewTitle = createCustomElement({ tag: 'h1', classes: `preview__title`, text: title});
preview.append(previewTitle);

// preview__actions
const previewActions = createCustomElement({ classes: `preview__actions`});
preview.append(previewActions);

// preview__actions-delivery
const previewActionsDelivery = createCustomElement({ classes: `preview__actions-delivery`});
previewActionsDelivery.insertAdjacentHTML("beforeend", icons.previewActionsSvg);
previewActions.append(previewActionsDelivery);

// preview__actions-description
const previewActionsDescription = createCustomElement({ classes: `preview__actions-description`});
previewActionsDelivery.append(previewActionsDescription);

// preview__actions-title
const previewActionsTitleRating = createCustomElement({ classes: `preview__actions-title`, text: '35-45'});
previewActionsDescription.append(previewActionsTitleRating);

// preview__actions-subtitle
const previewActionsSubtitleRating = createCustomElement({ classes: `preview__actions-subtitle`, text: 'мин'});
previewActionsDescription.append(previewActionsSubtitleRating);

// preview__actions-rating
const previewActionsRating = createCustomElement({ classes: `preview__actions-rating`});
previewActionsRating.insertAdjacentHTML("beforeend", icons.previewActionsRatingSvg);
previewActions.append(previewActionsRating);

// preview__actions-description
const previewActionsRatingDescription = createCustomElement({ classes: `preview__actions-description`});
previewActionsRating.append(previewActionsRatingDescription);

// preview__actions-title
const previewActionsTitle = createCustomElement({ classes: `preview__actions-title`, text: '4.8'});
previewActionsRatingDescription.append(previewActionsTitle);

// preview__actions-subtitle
const previewActionsSubtitle = createCustomElement({ classes: `preview__actions-subtitle`, text: '200+'});
previewActionsRatingDescription.append(previewActionsSubtitle);

// preview__actions-information
const previewActionsInformation = createCustomElement({ classes: `preview__actions-information`});
previewActionsInformation.insertAdjacentHTML("beforeend", icons.previewActionsInformationSvg);
previewActions.append(previewActionsInformation);

return {
    preview
};

};


"use strict";
exports.id = 2750;
exports.ids = [2750];
exports.modules = {

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ enterprises)
});

// EXTERNAL MODULE: ./Envirioment/Envirioment.js
var Envirioment = __webpack_require__(1790);
// EXTERNAL MODULE: ./_share/models/banner.model.js
var banner_model = __webpack_require__(7483);
;// CONCATENATED MODULE: ./_share/models/enterprise.model.js


class EnterpriseModel {
    constructor(){
        this.id;
        this.videoTitle;
        this.videoDescription;
        this.description;
        this.slug;
        this.title;
        this.secondName;
        this.tags;
        this.lots;
        this.latitude;
        this.longitude;
        this.metaTitle;
        this.metaDescription;
        this.status;
        this.createdAt;
        this.updatedAt;
        this.idAlphaville;
        this.cidade;
        this.typeId;
        this.typeLote;
        this.statusObra;
        this.destaque;
        this.prjUbntItensRodape;
        this.statusStand;
        this.idCv;
        this.descricaoCv;
        this.principalCv;
        this.tipoCv;
        this.pracaCv;
        this.isCampaign;
        this.uf;
        this.banner;
        this.metaProps;
        this.standVendas;
        this.videoYoutube;
        this.videoImagem;
        this.titleCadaSorriso;
        this.imagesCarrossel;
        this.titleSuaSeguranca;
        this.descriptionSuaSeguranca;
        this.imagemSuaSeguranca;
        this.imagemSuaSegurancaMob;
        this.logoType;
        this.formSaibaMais;
        this.messageAgradecimento;
        this.whatsAppAtivo;
        this.telefoneAtivo;
        this.saibaMaisAtivo;
    }
    setAPI(data, isTeaser) {
        this.id = data.empreendimento.id;
        this.description = data.empreendimento.description;
        this.slug = data.empreendimento.slug;
        this.title = data.empreendimento.name;
        this.secondName = data.empreendimento.second_name;
        this.tags = data.empreendimento.tags;
        this.lots = data.empreendimento.lots;
        this.latitude = data.empreendimento.latitude;
        this.longitude = data.empreendimento.longitude;
        this.metaTitle = data.empreendimento.meta_title;
        this.metaDescription = data.empreendimento.meta_description;
        this.status = data.empreendimento.status;
        this.createdAt = data.empreendimento.created_at;
        this.updatedAt = data.empreendimento.updated_at;
        this.idAlphaville = data.empreendimento.id_alphaville;
        this.cidade = data.empreendimento.cidade;
        this.typeId = {
            id: data.empreendimento.type_id,
            title: this.getTypeIdTitle(data.empreendimento.type_id)
        };
        this.typeLote = this.getTypeLoteTitle(data.empreendimento.type_lote);
        this.statusObra = {
            id: data.empreendimento.status_obra,
            title: this.getStatusObraTitle(data.empreendimento.status_obra)
        };
        this.displayColors = this.setDisplayColor(data.empreendimento.type_id, data.empreendimento.type_lote);
        this.destaque = data.empreendimento.destaque;
        this.prjUbntItensRodape = data.empreendimento.prj_ubnt_itens_rodape;
        this.statusStand = data.empreendimento.stand;
        this.idCv = data.empreendimento.id_cv;
        this.descricaoCv = data.empreendimento.descricao_cv;
        this.principalCv = data.empreendimento.principal_CV;
        this.tipoCv = data.empreendimento.tipo_CV;
        this.pracaCv = data.empreendimento.praca_CV;
        this.isCampaign = false;
        this.uf = new UfModel().setAPI(data.empreendimento.uf);
        this.banner = [
            new banner_model/* default */.Z().setAPI(data.images_empreendimento[0], isTeaser), 
        ];
        this.standVendas = {
            title: data.empreendimento.std_title,
            subTitle: data.empreendimento.std_sub_title,
            endereco: data.empreendimento.stand_endereco,
            hfuncionamento: data.empreendimento.stand_horario_funcionamento,
            latitude: parseFloat(data.empreendimento.latitude) || 0,
            longitude: parseFloat(data.empreendimento.longitude) || 0,
            stdLatitude: parseFloat(data.empreendimento.std_latitude) || 0,
            stdLongitude: parseFloat(data.empreendimento.std_longitude) || 0
        };
        this.videoYoutube = data.empreendimento.video;
        this.videoImagem = Envirioment/* ENDPOINT_BASE */.GU + "/" + data.empreendimento.video_image;
        this.titleCadaSorriso = data.empreendimento.spc_title;
        this.imagesCarrossel = data.espaco_exclusivo.filter((item, index)=>{
            return item.image !== null ? item.image : null;
        });
        this.titleSuaSeguranca = data.empreendimento.sct_title;
        this.descriptionSuaSeguranca = data.empreendimento.sct_description;
        this.imagemSuaSeguranca = Envirioment/* ENDPOINT_BASE */.GU + "/" + data.empreendimento.sct_first_image;
        this.imagemSuaSegurancaMob = Envirioment/* ENDPOINT_BASE */.GU + "/" + data.empreendimento.sct_image_mob;
        this.videoTitle = data.empreendimento.video_titulo;
        this.videoDescription = data.empreendimento.video_descricao;
        this.logoType = data.empreendimento.logo_novo == 1 ? "logoNova" : "logoAntiga";
        this.GaleriaImagemDescription = data.empreendimento.galeria_imagem_descricao;
        this.formSaibaMais = data.empreendimento.formulario_saiba_mais_titulo;
        this.linkStandAtivo = data.empreendimento.link_stand_ativo;
        this.messageAgradecimento = data.empreendimento.message_agradecimento;
        this.whatsAppAtivo = data.empreendimento.whatsapp;
        this.telefoneAtivo = data.empreendimento.fone;
        this.saibaMaisAtivo = data.empreendimento.email;
        const metaImages = null;
        // const metaImages = [{
        //     imageDesktop,
        //     titleDesktop
        // }];
        this.metaProps = new MetaProps().setAPI(data.meta_title, data.meta_description, data.tags, data.meta_abstract, data.meta_author, data.meta_copyright, metaImages);
        return this;
    }
    getTypeIdTitle(typeId) {
        let title = "";
        switch(typeId){
            case 1:
                title = "Residencial";
                break;
            case 2:
                title = "Cidades Alpha";
                break;
            case 3:
                title = "Comercial";
                break;
        }
        return title;
    }
    getTypeLoteTitle(typeLote) {
        let lote = {
            id: typeLote,
            title: "Alphaville"
        };
        switch(typeLote){
            case 1:
                lote.title = "Alphaville";
                break;
            case 2:
                lote.title = "Terras Alpha";
                break;
            case 3:
                lote.title = "Jardim Alpha";
                break;
            case 5:
                lote.title = "Terras Alphaville";
                break;
        }
        return lote;
    }
    getStatusObraTitle(statusObra) {
        let title = "";
        switch(statusObra){
            case 4:
                title = "Pr\xe9-lan\xe7amento (teaser)";
                break;
            case 1:
                title = "Lan\xe7amento";
                break;
            case 2:
                title = "Em Constru\xe7\xe3o";
                break;
            case 3:
                title = "Obras Conclu\xeddas";
                break;
            case 5:
                title = "Residencia";
                break;
        }
        return title;
    }
    setDisplayColor(typeId, loteTypeId, isCampaign) {
        let colors = {
            colorMain: "#6de4d7",
            colorTwo: "#6de4d7",
            colorFlat: "#008aa4",
            displayColor: "no-shadow"
        };
        if (typeId == 3 || typeId == 2) {
            colors.displayColor = "shadow";
            colors.colorMain = "#494850";
            colors.colorTwo = "#2a2934";
            colors.colorFlat = "#494850";
        } else if (loteTypeId == 2 || loteTypeId == 5) {
            colors.displayColor = "logoTerras";
            colors.colorMain = "#f26522";
            colors.colorTwo = "#ffcc32";
            colors.colorFlat = "#f26522";
            colors.suaSeguranca = "#f26522";
        } else if (loteTypeId == 3) {
            colors.displayColor = "logoJardim";
            colors.colorMain = "#b26da9";
            colors.colorTwo = "#5eabdb";
            colors.colorFlat = "#008aa4";
        } else if (typeId == 1) {
            colors.displayColor = "logoEmpreendimentos";
            colors.colorMain = "#6de4d7";
            colors.colorTwo = "#6de4d7";
            colors.colorFlat = "#39bb9c";
            colors.suaSeguranca = "#a89985";
        } else if (isCampaign) {
            colors.displayColor = "shadow-campaign";
            colors.colorMain = "#666";
            colors.colorTwo = "#979797";
            colors.colorFlat = "#666";
        }
        return colors;
    }
}
class MetaProps {
    constructor(){
        this.title;
        this.description;
        this.url;
        this.images;
    }
    setAPI(metaTitle, metaDescription, tags, metaAbstract, metaAuthor, metaCopyright, metaImages) {
        if (!metaTitle && !metaDescription) return this.getdefaultMetaProps();
        const metaDefault = this.getdefaultMetaProps();
        this.title = metaTitle ? metaTitle : metaDefault.title;
        this.description = metaDescription ? metaDescription : metaDefault.description;
        this.url = imageDesktop ? Envirioment/* URL_DOMAIN */.V3 + "/" + imageDesktop : metaDefault.url;
        this.images = metaDefault.images;
        // this.images = [{
        //     url: imageDesktop? URL_DOMAIN + '/' + imageDesktop : metaDefault.images[0].url,
        //     type: 'image/jpeg',
        //     width: '1200',
        //     height: '489',
        //     alt: metaTitle? metaTitle : metaDefault.images[0].alt
        // }];
        return this;
    }
    getdefaultMetaProps() {
        this.title = "Alphaville - Residenciais e lotes comerciais \xe0 venda";
        this.description = "Bem vindo \xe0 Alphaville. Conhe\xe7a nossos lotes \xe0 venda";
        this.url = Envirioment/* URL_DOMAIN */.V3 + "/";
        this.images = [
            {
                url: Envirioment/* URL_DOMAIN */.V3 + "/static/images/alphaville.jpg",
                type: "image/jpeg",
                width: "1200",
                height: "489",
                alt: "Alphaville"
            }, 
        ];
        return this;
    }
}
class UfModel {
    constructor(){
        this.id;
        this.title;
        this.uf;
        this.latitude;
        this.longitude;
        this.current;
        this.status;
        this.createdAt;
        this.updatedAt;
    }
    setAPI(data) {
        this.id = data.id;
        this.title = data.title;
        this.uf = data.uf;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.current = data.current;
        this.status = data.status;
        this.createdAt = data.created_at;
        this.updatedAt = data.updated_at;
        return this;
    }
}
/* harmony default export */ const enterprise_model = (EnterpriseModel);

// EXTERNAL MODULE: ./_share/service/api.js
var api = __webpack_require__(1326);
;// CONCATENATED MODULE: ./_share/service/enterprises.js



class Enterprise {
    getEnterpriseBySlugTitle = async (slugTitle, isTeaser = false)=>{
        let urlEnterprise = `${Envirioment/* ENDPOINT_ENTERPRISE */.cM}${slugTitle}`;
        const result = await api/* default.get */.Z.get(urlEnterprise);
        let enterprise = {};
        if (result.data) {
            enterprise = new enterprise_model().setAPI(result.data, isTeaser);
        }
        return enterprise;
    };
}
/* harmony default export */ const enterprises = (Enterprise);


/***/ })

};
;
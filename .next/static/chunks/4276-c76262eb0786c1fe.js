(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4276],{2132:function(e,t,i){"use strict";var a=i(5893),s=i(7509),n=(i(7294),i(4184)),r=i.n(n),o=i(6543),d=i.n(o);t.Z=function(e){var t,i,n=e.link,o=e.colors;return(0,a.jsx)(s.Z,{className:r()(d().backButtonArea,(t=o.displayColor,i=d(),"logoJardim"===t?i.jardim:"logoTerras"===t?i.terras:i.alphaville),d().saibaMais),text:"VOLTAR A NAVEGAR",arrayLink:[n]})}},3817:function(e,t,i){"use strict";var a=i(5893),s=i(682),n=i(1608),r=i(1555),o=i(7294),d=i(2132),m=i(1790),l=i(286),c=i.n(l);t.Z=function(e){e.homeContent;var t=e.colors,i=e.success,l=e.showButton,h=e.link,p={color:t.colorFlat},u=(0,o.useState)(""),_=u[0],g=u[1],v=(0,o.useState)(""),b=v[0],f=v[1],A=(0,o.useState)(""),T=A[0],y=A[1];return(0,o.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem(m.zg));if(e&&e.Name){var t=e.Name,i=e.MessageAgradecimento,a=e.Slug;g(t),f(i),y(a)}}),[_,b,T]),(0,a.jsx)("section",{className:c().areaTeaserVideoJardimAlpha,children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:c().areaTeaserVideo,children:(0,a.jsx)(s.Z,{className:c().container,children:(0,a.jsx)(n.Z,{children:(0,a.jsx)(r.Z,{xs:12,children:(0,a.jsxs)("div",{className:c().areaTitleTeaserVideo,children:[i?(0,a.jsxs)("div",{children:["casas-alphaville-d-pedro-0"!=T?(0,a.jsx)("h2",{style:p,className:c().title,children:"".concat(_,", agradecemos o seu interesse pelo residencial da maior urbanizadora do Brasil.")}):(0,a.jsx)("h2",{style:p,className:c().title,children:"".concat(_,", agradecemos o seu interesse.")}),(0,a.jsx)("h2",{style:p,className:c().title,children:b})]}):(0,a.jsx)("h2",{style:p,className:c().title,children:"Erro ao enviar contato."}),l&&(0,a.jsx)(d.Z,{link:h,colors:t})]})})})})})})})}},2750:function(e,t,i){"use strict";i.d(t,{Z:function(){return g}});var a=i(7568),s=i(1438),n=i(4924),r=i(4051),o=i.n(r),d=i(1790),m=i(2951),l=i(7483),c=function(){function e(){(0,s.Z)(this,e),this.id,this.videoTitle,this.videoDescription,this.description,this.slug,this.title,this.secondName,this.tags,this.lots,this.latitude,this.longitude,this.metaTitle,this.metaDescription,this.status,this.createdAt,this.updatedAt,this.idAlphaville,this.cidade,this.typeId,this.typeLote,this.statusObra,this.destaque,this.prjUbntItensRodape,this.statusStand,this.idCv,this.descricaoCv,this.principalCv,this.tipoCv,this.pracaCv,this.isCampaign,this.uf,this.banner,this.metaProps,this.standVendas,this.videoYoutube,this.videoImagem,this.titleCadaSorriso,this.imagesCarrossel,this.titleSuaSeguranca,this.descriptionSuaSeguranca,this.imagemSuaSeguranca,this.imagemSuaSegurancaMob,this.logoType,this.formSaibaMais,this.messageAgradecimento,this.whatsAppAtivo,this.telefoneAtivo,this.saibaMaisAtivo,this.tituloProjetoUrbanistico,this.descricaoProjetoUrbanistico,this.imagemProjetoUrbanistico}return(0,m.Z)(e,[{key:"setAPI",value:function(e,t){this.id=e.empreendimento.id,this.description=e.empreendimento.description,this.slug=e.empreendimento.slug,this.title=e.empreendimento.name,this.secondName=e.empreendimento.second_name,this.tags=e.empreendimento.tags,this.lots=e.empreendimento.lots,this.latitude=e.empreendimento.latitude,this.longitude=e.empreendimento.longitude,this.metaTitle=e.empreendimento.meta_title,this.metaDescription=e.empreendimento.meta_description,this.status=e.empreendimento.status,this.createdAt=e.empreendimento.created_at,this.updatedAt=e.empreendimento.updated_at,this.idAlphaville=e.empreendimento.id_alphaville,this.cidade=e.empreendimento.cidade,this.tituloProjetoUrbanistico=e.empreendimento.prj_ubnt_title,this.descricaoProjetoUrbanistico=e.empreendimento.prj_ubnt_description,this.descricaoPlantaConceitual=e.empreendimento.plt_prj_description,this.descricaoAreaDeLazer=e.empreendimento.plt_area_description,this.areaDeLazer=e.area_lazer,this.titleConceito=e.empreendimento.atm_title,this.descricaoConceito=e.empreendimento.atm_description,this.Metros=e.empreendimento.prj_ubnt_itens_area_second,this.Verdes=e.empreendimento.prj_ubnt_itens_area_third,this.Terreno=e.empreendimento.prj_ubnt_itens_area_fourth,this.unidatesTerreno=e.empreendimento.prj_ubnt_itens_desc_second,this.tituloSeguranca=e.empreendimento.sct_first_image_alt,this.servicoSeguranca=e.empreendimento.sct_item_first,this.servicoSegurancaSecond=e.empreendimento.sct_item_second,this.servicoSegurancaThird=e.empreendimento.sct_item_third,this.secondImageAltSeguranca=e.empreendimento.sct_second_image_alt,this.aut_mgnt_sub_title=e.empreendimento.aut_mgnt_sub_title,this.aut_mgnt_item_1=e.empreendimento.aut_mgnt_item_1,this.aut_mgnt_item_2=e.empreendimento.aut_mgnt_item_2,this.aut_mgnt_item_3=e.empreendimento.aut_mgnt_item_3,this.aut_mgnt_item_4=e.empreendimento.aut_mgnt_item_4,this.aut_mgnt_item_5=e.empreendimento.aut_mgnt_item_5,this.lcz_etg_sub_title=e.empreendimento.lcz_etg_sub_title,this.lcz_etg_description=e.empreendimento.lcz_etg_description,this.localizacaoEstrategicas=e.localizacao_estrategicas,this.lcz_etg_image_alt=e.empreendimento.lcz_etg_image_alt,this.tour360=e.empreendimento.tour_360,this.out_emp_description=e.empreendimento.out_emp_description,this.plantaDetalhes=e.planta_detalhes,this.typeId={id:e.empreendimento.type_id,title:this.getTypeIdTitle(e.empreendimento.type_id)},this.typeLote=this.getTypeLoteTitle(e.empreendimento.type_lote),this.statusObra={id:e.empreendimento.status_obra,title:this.getStatusObraTitle(e.empreendimento.status_obra)},this.displayColors=this.setDisplayColor(e.empreendimento.type_id,e.empreendimento.type_lote),this.destaque=e.empreendimento.destaque,this.prjUbntItensRodape=e.empreendimento.prj_ubnt_itens_rodape,this.statusStand=e.empreendimento.stand,this.idCv=e.empreendimento.id_cv,this.descricaoCv=e.empreendimento.descricao_cv,this.principalCv=e.empreendimento.principal_CV,this.tipoCv=e.empreendimento.tipo_CV,this.pracaCv=e.empreendimento.praca_CV,this.isCampaign=!1,this.uf=(new p).setAPI(e.empreendimento.uf),this.banner=[(new l.Z).setAPI(e.images_empreendimento[0],t)],this.standVendas={title:e.empreendimento.std_title,subTitle:e.empreendimento.std_sub_title,endereco:e.empreendimento.stand_endereco,hfuncionamento:e.empreendimento.stand_horario_funcionamento,latitude:parseFloat(e.empreendimento.latitude)||0,longitude:parseFloat(e.empreendimento.longitude)||0,stdLatitude:parseFloat(e.empreendimento.std_latitude)||0,stdLongitude:parseFloat(e.empreendimento.std_longitude)||0},this.videoYoutube=e.empreendimento.video,this.videoImagem=d.GU+"/"+e.empreendimento.video_image,this.titleCadaSorriso=e.empreendimento.spc_title,this.imagesCarrossel=e.espaco_exclusivo.filter((function(e,t){return null!==e.image?e.image:null})),this.titleSuaSeguranca=e.empreendimento.sct_title,this.descriptionSuaSeguranca=e.empreendimento.sct_description,this.imagemSuaSeguranca=d.GU+"/"+e.empreendimento.sct_first_image,this.imagemProjetoUrbanistico=d.GU+"/"+e.empreendimento.prj_ubnt_image,this.secondImageSeguranca=d.GU+"/"+e.empreendimento.sct_second_image,this.lczEtgImage=d.GU+"/"+e.empreendimento.lcz_etg_image,this.imagemSuaSegurancaMob=e.empreendimento.sct_image_mob,this.imgConceito=d.GU+"/"+e.empreendimento.atm_image,this.imgProjUrbanistico=d.GU+"/"+e.empreendimento.plt_prj_image,this.areaLazer=d.GU+"/"+e.empreendimento.plt_area_image,this.videoTitle=e.empreendimento.video_titulo,this.videoDescription=e.empreendimento.video_descricao,this.logoType=1==e.empreendimento.logo_novo?"logoNova":"logoAntiga",this.GaleriaImagemDescription=e.empreendimento.galeria_imagem_descricao,this.formSaibaMais=e.empreendimento.formulario_saiba_mais_titulo,this.linkStandAtivo=e.empreendimento.link_stand_ativo,this.messageAgradecimento=e.empreendimento.message_agradecimento,this.whatsAppAtivo=e.empreendimento.whatsapp,this.telefoneAtivo=e.empreendimento.fone,this.saibaMaisAtivo=e.empreendimento.email;return this.metaProps=(new h).setAPI(e.meta_title,e.meta_description,e.tags,e.meta_abstract,e.meta_author,e.meta_copyright,null),this}},{key:"getTypeIdTitle",value:function(e){var t="";switch(e){case 1:t="Residencial";break;case 2:t="Cidades Alpha";break;case 3:t="Comercial"}return t}},{key:"getTypeLoteTitle",value:function(e){var t={id:e,title:"Alphaville"};switch(e){case 1:t.title="Alphaville";break;case 2:t.title="Terras Alpha";break;case 3:t.title="Jardim Alpha";break;case 5:t.title="Terras Alphaville"}return t}},{key:"getStatusObraTitle",value:function(e){var t="";switch(e){case 4:t="Pr\xe9-lan\xe7amento (teaser)";break;case 1:t="Lan\xe7amento";break;case 2:t="Em Constru\xe7\xe3o";break;case 3:t="Obras Conclu\xeddas";break;case 5:t="Residencia"}return t}},{key:"setDisplayColor",value:function(e,t,i){var a={colorMain:"#6de4d7",colorTwo:"#6de4d7",colorFlat:"#008aa4",displayColor:"no-shadow"};return 3==e||2==e?(a.displayColor="shadow",a.colorMain="#494850",a.colorTwo="#2a2934",a.colorFlat="#494850"):2==t||5==t?(a.displayColor="logoTerras",a.colorMain="#f26522",a.colorTwo="#ffcc32",a.colorFlat="#f26522",a.suaSeguranca="#f26522"):3==t?(a.displayColor="logoJardim",a.colorMain="#b26da9",a.colorTwo="#5eabdb",a.colorFlat="#008aa4"):1==e?(a.displayColor="logoEmpreendimentos",a.colorMain="#6de4d7",a.colorTwo="#6de4d7",a.colorFlat="#39bb9c",a.suaSeguranca="#a89985"):i&&(a.displayColor="shadow-campaign",a.colorMain="#666",a.colorTwo="#979797",a.colorFlat="#666"),a}}]),e}(),h=function(){function e(){(0,s.Z)(this,e),this.title,this.description,this.url,this.images}return(0,m.Z)(e,[{key:"setAPI",value:function(e,t,i,a,s,n,r){if(!e&&!t)return this.getdefaultMetaProps();var o=this.getdefaultMetaProps();return this.title=e||o.title,this.description=t||o.description,this.url=imageDesktop?d.V3+"/"+imageDesktop:o.url,this.images=o.images,this}},{key:"getdefaultMetaProps",value:function(){return this.title="Alphaville - Residenciais e lotes comerciais \xe0 venda",this.description="Bem vindo \xe0 Alphaville. Conhe\xe7a nossos lotes \xe0 venda",this.url=d.V3+"/",this.images=[{url:d.V3+"/static/images/alphaville.jpg",type:"image/jpeg",width:"1200",height:"489",alt:"Alphaville"}],this}}]),e}(),p=function(){function e(){(0,s.Z)(this,e),this.id,this.title,this.uf,this.latitude,this.longitude,this.current,this.status,this.createdAt,this.updatedAt}return(0,m.Z)(e,[{key:"setAPI",value:function(e){return this.id=e.id,this.title=e.title,this.uf=e.uf,this.latitude=e.latitude,this.longitude=e.longitude,this.current=e.current,this.status=e.status,this.createdAt=e.created_at,this.updatedAt=e.updated_at,this}}]),e}(),u=c,_=i(1326),g=function e(){(0,s.Z)(this,e),(0,n.Z)(this,"getEnterpriseBySlugTitle",function(){var e=(0,a.Z)(o().mark((function e(t){var i,a,s,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.length>1&&void 0!==r[1]&&r[1],a="".concat(d.cM).concat(t),e.next=4,_.Z.get(a);case 4:return s=e.sent,n={},s.data&&(n=(new u).setAPI(s.data,i)),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},6543:function(e){e.exports={backButtonArea:"back-button_backButtonArea__HSq9b",jardim:"back-button_jardim__C2q1n",saibaMais:"back-button_saibaMais__1IFxZ",terras:"back-button_terras__BrxEF",alphaville:"back-button_alphaville__y6MUD"}},286:function(e){e.exports={areaTeaserVideoJardimAlpha:"teaser-agradecimento_areaTeaserVideoJardimAlpha__iZAlC",areaTeaserVideo:"teaser-agradecimento_areaTeaserVideo__tYXpS",container:"teaser-agradecimento_container__Xi5_t",areaTitleTeaserVideo:"teaser-agradecimento_areaTitleTeaserVideo__N8R1X",title:"teaser-agradecimento_title__WBUcd",description:"teaser-agradecimento_description__u24Bw",teaserVideoPlayerContainer:"teaser-agradecimento_teaserVideoPlayerContainer__rNow9",btnTeaserVideo:"teaser-agradecimento_btnTeaserVideo__D86OW"}}}]);
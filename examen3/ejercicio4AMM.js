var godosJSON = '{"reyesgodos":[{"nombre":"Alarico","hijos":["Atanagildo","Recesvinto","Leovigildo"]},{"nombre":"RecaredoI","hijos":["Sisebuto","RecaredoII"]},{"nombre":"Suintila","hijos":["Chindasvinto","Recesvinto","Wamba","Égica","Witiza","Rodrigo"]}]} ';

console.log(JSON.parse(godosJSON).reyesgodos.filter(objeto => objeto.hijos.find(hijo => hijo == 'Recesvinto')).map(objeto => objeto.nombre))
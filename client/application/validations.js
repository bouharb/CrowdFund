/**
 * Created by wael on 25/04/2016.
 */
$.validator.addMethod( 'projetUnique', function( title )  {
    var exists = Test.findOne( { "basicInfo.titre": title }, { fields: { "basicInfo.titre": 1 } } );
return exists ? false : true;
});
$.validator.addMethod( 'montantInteger', function( montant )  {
    if(montant!=parseInt(montant))
    return false;
    return true;
});

$.validator.addMethod( 'dureeCollecte', function( jour )  {
    if(jour>60)
        return false;
    return true;
});


$.validator.addMethod( 'zero', function( ct )  {
    if(ct<=0)
        return false;
    return true;
});


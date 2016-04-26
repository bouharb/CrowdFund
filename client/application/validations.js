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

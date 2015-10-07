$(function() {

    //model
    var Role = Backbone.Model.extend({
    });

    //collection
    var RoleCollection = Backbone.Collection.extend({
        model: Role,
        url: '/training_emily/p1/test.json'
    });

    var collectionOfRoles = new RoleCollection();

    //view
    var RoleView = Backbone.View.extend({
        el: $("#product-list"),

        template: Handlebars.compile( $("#tpl").html() ),

        initialize: function() {
            var thisRoleView = this;

            collectionOfRoles.fetch(
                {
                    success: function() { thisRoleView.render(); },
                    error: function() { console.error("Unable to load role!"); }
                }
            );
        },

        render: function () {

            var context = collectionOfRoles.toJSON();

            this.$el.append( this.template({ roles: context[0] }));

            //this.$el.append( this.template({ roles: collectionOfRoles.toJSON() }));

            console.log("this.$el: ", this.$el);
            console.log("context: ", context[0].roles[0].type );

            return this;
        }
    });

    var roleView = new RoleView();

});
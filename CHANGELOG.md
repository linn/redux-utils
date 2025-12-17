# Changelog
## [2.1.0] - 2025-12-17
Make the requiresAuth field on Redux Standard API-calling Actions (RSAAs) options dictionary specifiable, whereas previously it was hardcoded to true for all RSAAs.
The new parameter is passed to the actionCreator functions, and is both optional and defaults to true so as not to cause any breaking change.

For context, our usual purpose for this boolean options value has been to determine whether or not to append an authorization (bearer) header to the resulting requests that are made when the RSAAs are dispatched. 

Usually in our redux clients there is an authorizaion.js middleware that consults this boolean and then decides whether or not to append the access token (JWT) to the request as an authorization (bearer) header. So to summarise, this change will allow submitting requests from RSAAs with no auth header, which wasn't previously possible.

## [2.0.0] - 2025-07-01
Start converting a few files to typescript. This alone wouldn't be a breaking change since the bundler will still bundle everything down to cjs, but I also changed the behaviour of the collectionStoreFactory slightly (which was one of the files I converted to typescript), hence the major version bump.

Previously the items in the redux store, for example those added when a RECEIVE_ITEMS still action is processed by a corresponding reducer, were given a href: utilities.getSelfHref(item) property.

I thought this seemed redundant since they'll have a links array anyway (maybe it was just an optimisation to make the self href imemediately accessible but seems unecessary).

## [1.0.2] - 2025-07-01
Delete some redundant files

## [1.0.1] - 2025-07-01
Initial deploy

## [1.0.0] - 2025-07-01
Initial prerelease deploy

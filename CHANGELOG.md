# Changelog
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


RLS_ASSETS = ".release_assets"
TLISTFILE = ".tlist"

tlist:
	node ./.scripts/build_tlist.cjs $(RLS_ASSETS) $(TLISTFILE)